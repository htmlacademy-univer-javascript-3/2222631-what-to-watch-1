import {DEFAULT_GENRE} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MouseEvent, useState} from 'react';
import {getGenres} from '../../utils/get-genres';
import {getFilms} from '../../store/main-page-processor/selectors';
import {changeGenre} from '../../store/main-page-processor/main-page-processor';
import {Link} from 'react-router-dom';

function GenresFilter(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);

  const dispatch = useAppDispatch();

  const films = useAppSelector(getFilms);
  const genres = getGenres(films);

  const handleChangeGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    setCurrentGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <Link
            to="/"
            className="catalog__genres-link"
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
}

export default GenresFilter;
