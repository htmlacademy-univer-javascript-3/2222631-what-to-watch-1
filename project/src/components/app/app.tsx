import React, { Fragment } from 'react';
import {Main} from '../../pages/Main';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Film} from '../../pages/Film';
import {AddReview} from '../../pages/AddReview';
import {MyList} from '../../pages/MyList';
import {Player} from '../../pages/Player';
import {SignIn} from '../../pages/SignIn';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              title={'The Grand Budapest Hotel'}
              genre={'Drama'}
              yearOfPromoRelease={2014}
              filmsListProps={window.FilmsList}
            />
          }
        />
        <Route
          path='/login'
          element={<SignIn/>}
        />
        <Route
          path='/films/:id'
        >
          <Route index element={<Film/>} />
          <Route path={'review'} element={<AddReview/>} />
        </Route>
        <Route
          path='/mylist'
          element={
            <MyList
              films={window.FilmsList.slice(0, 9)}
              user={{ isAuthorize: false }}
            />
          }
        />
        <Route path='/player/:id' element={<Player/>}/>
        <Route
          path='*'
          element={
            <Fragment>
              <h1>404 Page Not Found</h1>
              <h2><Link to='/'>Main</Link></h2>
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
