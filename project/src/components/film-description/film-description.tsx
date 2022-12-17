import {useAppSelector} from '../../hooks';

import FilmNavigators from './film-navigators';
import FilmInfo from './film-info';
import FilmAbout from './film-about';
import ReviewList from '../review/review-list';
import {FilmPageTabs} from '../../const';
import {getReviews, getFilm, getFilmPageTab} from '../../store/film-meta-processor/selectors';

function FilmDescription (): JSX.Element {
  const currentTab = useAppSelector(getFilmPageTab);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getReviews);

  if (!film) {
    return <div className="film-card__desc"></div>;
  }

  return (
    <div className="film-card__desc">
      <FilmNavigators currentTab={currentTab} />

      {currentTab === FilmPageTabs.Overview &&
        <FilmInfo
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />}

      {currentTab === FilmPageTabs.Details &&
        <FilmAbout
          director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />}

      {currentTab === FilmPageTabs.Reviews && <ReviewList reviews={comments} />}
    </div>
  );
}

export default FilmDescription;
