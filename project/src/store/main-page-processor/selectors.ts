import {NameSpace} from '../../const';
import {UserState} from '../../types/user/user-state';
import Films from '../../types/film/films';
import Film from '../../types/film/film';

export const getFilms = (state: UserState): Films => state[NameSpace.MainScreen].films;
export const getPromo = (state: UserState): Film | null => state[NameSpace.MainScreen].promo;
export const getFilteredFilms = (state: UserState): Films => state[NameSpace.MainScreen].filteredFilms;
export const getCardCount = (state: UserState): number => state[NameSpace.MainScreen].cardCount;
export const getFavoriteFilms = (state: UserState): Films => state[NameSpace.MainScreen].favoriteFilms;
export const getFavoriteCount = (state: UserState): number => state[NameSpace.MainScreen].favoriteCount;
