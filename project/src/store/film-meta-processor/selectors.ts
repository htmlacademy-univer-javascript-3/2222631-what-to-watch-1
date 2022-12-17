import {UserState} from '../../types/user/user-state';
import {NameSpace} from '../../const';
import Film from '../../types/film/film';
import Films from '../../types/film/films';
import {Reviews} from '../../types/reviews';

export const getFilm = (state: UserState): Film | null => state[NameSpace.FilmScreen].film;
export const getSimilar = (state: UserState): Films => state[NameSpace.FilmScreen].related;
export const getReviews = (state: UserState): Reviews => state[NameSpace.FilmScreen].reviews;
export const getFilmPageTab = (state: UserState): string => state[NameSpace.FilmScreen].filmPageTab;
export const getIsFilmFoundStatus = (state: UserState): boolean | null => state[NameSpace.FilmScreen].isFilmFoundStatus;
