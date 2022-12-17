import parseRateToWord from '../../utils/parse-rate-to-word';

type FilmInfoProps = {
  rating: number,
  scoresCount: number,
  description: string,
  director: string,
  starring: string[]
}

function FilmInfo(props: FilmInfoProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = props;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{parseRateToWord(rating)}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default FilmInfo;
