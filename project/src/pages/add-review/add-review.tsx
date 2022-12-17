import ReviewForm from '../../components/review/review-form';
import {AppRoute} from '../../const';
import {Link, useParams} from 'react-router-dom';
import User from '../../components/user/user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmByID} from '../../store/api-actions';
import {getFilm} from '../../store/film-meta-processor/selectors';
import Header from '../../components/header/header';

function AddReview(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header>
          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`${AppRoute.Film}/${id}`} className='breadcrumbs__link'>{film?.name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link className='breadcrumbs__link' to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <User />
        </Header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film?.posterImage} alt={film?.name} width='218' height='327'/>
        </div>
      </div>
      <ReviewForm />

    </section>
  );
}

export default AddReview;
