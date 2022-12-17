import {DEFAULT_GENRE} from '../const';
import Film from '../types/film/film';

export const getGenres = (films: Film[]) => (
  [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]
);
