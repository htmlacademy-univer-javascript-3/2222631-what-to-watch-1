import {AppRoute, AuthorizationStatus, favoriteClickType} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import Film from '../../types/film/film';
import {FilmStatus} from '../../types/film/film-status';
import {changeFilmStatusToView, changePromoStatusToView} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type FilmCardButtonsProps = {
  id: number,
  authStatus: string,
  film: Film | null,
  favoriteCount: number,
  favoriteType: string
}

function FilmCardButtons(FilmCardButtonsProps: FilmCardButtonsProps): JSX.Element {
  const {id, film, favoriteType, favoriteCount, authStatus} = FilmCardButtonsProps;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onMyListClick = () => {
    const filmStatus: FilmStatus = {
      filmId: film?.id || NaN,
      isInMyList: film?.isInMyList ?? false
    };

    if (favoriteType === favoriteClickType.Film) {
      dispatch(changeFilmStatusToView(filmStatus));
    } else {
      dispatch(changePromoStatusToView(filmStatus));
    }
  };

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={ () => {
          navigate(`${AppRoute.Player}/${id}`);
        }}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      {
        authStatus === AuthorizationStatus.Auth &&
        <button
          className="btn btn--list film-card__button"
          type="button"
          onClick={onMyListClick}
        >
          {
            film?.isInMyList ?
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{favoriteCount}</span>
        </button>
      }
      {
        authStatus === AuthorizationStatus.Auth &&
        <Link
          to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}
          className="btn film-card__button"
        >
          Add review
        </Link>
      }
    </div>
  );
}

export default FilmCardButtons;
