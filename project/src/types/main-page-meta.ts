import Films from './film/films';
import Film from './film/film';

export type MainPageMeta = {
  films: Films,
  promo: Film | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredFilms: Films,
  cardCount: number,
  favoriteFilms: Films,
  favoriteCount: number
}
