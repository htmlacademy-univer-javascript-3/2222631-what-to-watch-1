import {useAppSelector} from '../../hooks';

import GenresFilter from '../genres-filter/genres-filter';
import FilmCard from './film-card';
import ShowMoreFilmsButton from '../show-more-films-button/show-more-films-button';
import {getCardCount, getFilteredFilms} from '../../store/main-page-processor/selectors';

function FilmList(): JSX.Element {

  const films = useAppSelector(getFilteredFilms);
  const cardCount = useAppSelector(getCardCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}

            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

          />))}
      </div>

      <ShowMoreFilmsButton isAllCardsLoaded={cardCount !== films.length}/>
    </section>
  );
}

export default FilmList;
