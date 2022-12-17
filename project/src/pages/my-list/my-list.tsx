import FilmCardLite from '../../components/film-description/film-card-lite';
import User from '../../components/user/user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms} from '../../store/main-page-processor/selectors';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-meta-processor/selectors';
import {AuthorizationStatus} from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function MyList(): JSX.Element {
  const favorite = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  return (
    <div className='user-page'>
      <Header>
        <h1 className='page-title user-page__title'>
          My list<span className='user-page__film-count'>{favorite.length}</span>
        </h1>
        <User />
      </Header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__films-list'>
          {favorite.map((film) => <FilmCardLite key={film.id} id={film.id} title={film.name} image={film.previewImage}/>)}
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
