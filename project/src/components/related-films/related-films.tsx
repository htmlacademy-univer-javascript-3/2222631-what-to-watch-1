import Films from '../../types/film/films';
import FilmCardLite from '../film-description/film-card-lite';

type RelatedFilmsProps = {
  related: Films;
}

function RelatedFilms({related}: RelatedFilmsProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {related.map((film) => <FilmCardLite key={film.id} id={film.id} title={film.name} image={film.previewImage}/>)}
      </div>
    </section>
  );
}

export default RelatedFilms;
