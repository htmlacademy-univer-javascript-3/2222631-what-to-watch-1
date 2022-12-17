import PromoCard from '../../components/promo-card/promo-card';
import FilmList from '../../components/film-description/film-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {getAuthorizationStatus} from '../../store/user-meta-processor/selectors';
import {AuthorizationStatus} from '../../const';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import Footer from '../../components/footer/footer';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  return (
    <>
      <PromoCard />

      <div className='page-content'>
        <FilmList />

        <Footer/>
      </div>
    </>
  );
}

export default Main;
