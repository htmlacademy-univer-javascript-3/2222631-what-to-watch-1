import {Film} from './film';
import {Films} from './films';
import {Reviews} from '../reviews';

export type FilmMeta = {
  film: Film | null,
  related: Films,
  reviews: Reviews,
  filmPageTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadingStatus: boolean | null
}
