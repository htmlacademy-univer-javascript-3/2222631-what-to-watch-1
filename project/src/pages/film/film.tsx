import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {
  fetchReviewsByID,
  fetchFavoriteFilmsAction,
  fetchFilmByID,
  fetchRelatedByID
} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

import User from '../../components/user/user';
import FilmDescription from '../../components/film-description/film-description';
import RelatedFilms from '../../components/related-films/related-films';
import NotFound from '../not-found/not-found';

import {AuthorizationStatus, favoriteClickType, FilmPageTabs} from '../../const';
import {getFilm, getIsFilmFoundStatus, getSimilar} from '../../store/film-meta-processor/selectors';
import {getAuthorizationStatus} from '../../store/user-meta-processor/selectors';
import {changeFilmTab} from '../../store/film-meta-processor/film-meta-processor';
import {getFavoriteCount} from '../../store/main-page-processor/selectors';
import FilmCardButtons from '../../components/film-description/film-card-buttons';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Film(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);
  const similar = useAppSelector(getSimilar);

  const authStatus = useAppSelector(getAuthorizationStatus);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);

  const favoriteCount = useAppSelector(getFavoriteCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmTab(FilmPageTabs.Overview));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchReviewsByID(id.toString()));
    dispatch(fetchRelatedByID(id.toString()));

    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }

  }, [id, authStatus, dispatch]);

  if (!isFilmFoundStatus) {
    return <NotFound />;
  }

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <Header>
            <User />
          </Header>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film?.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film?.genre}</span>
                <span className='film-card__year'>{film?.released}</span>
              </p>

              <FilmCardButtons
                id={id}
                authStatus={authStatus}
                film={film}
                favoriteCount={favoriteCount}
                favoriteType={favoriteClickType.Film}
              />
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film?.posterImage} alt={film?.name} width='218' height='327' />
            </div>
            <FilmDescription />
          </div>
        </div>
      </section>

      <div className='page-content'>
        <RelatedFilms related={similar} />

        <Footer/>
      </div>
    </>
  );
}

export default Film;
