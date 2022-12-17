import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';

import history from '../../history';
import HistoryRouter from '../history-route/history-route';

import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import AddReview from '../../pages/add-review/add-review';
import AuthedUserRoute from '../authed-user-route/authed-user-route';

import {useAppSelector} from '../../hooks';

import {getAuthorizationStatus} from '../../store/user-meta-processor/selectors';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route path={AppRoute.Film}>
          <Route
            path={':id'}
            element={<Film />}
          />
          <Route
            path={`:id${AppRoute.AddReview}`}
            element={
              <AuthedUserRoute authStatus={authStatus}>
                <AddReview />
              </AuthedUserRoute>
            }
          />
        </Route>
        <Route
          path={AppRoute.MyList}
          element={
            <AuthedUserRoute authStatus={authStatus}>
              <MyList />
            </AuthedUserRoute>
          }
        />
        <Route path={AppRoute.Player}>
          <Route
            path={':id'}
            element={<Player />}
          />
        </Route>
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
