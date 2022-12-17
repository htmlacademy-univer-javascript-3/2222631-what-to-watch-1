import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, UserState} from '../types/user/user-state';
import {AxiosInstance} from 'axios';
import Films from '../types/film/films';
import {ApiEndpoints, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user/user-data';
import {dropToken} from '../services/token';
import Film from '../types/film/film';
import Reviews from '../types/reviews';
import {UserComment} from '../types/user/user-comment';
import {FilmStatus} from '../types/film/film-status';
import {dropAvatarURL} from '../services/avatar';
import {errorHandler} from '../services/error-handler';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(ApiEndpoints.Films);
      return data;
    } catch {
      errorHandler('Не удалось получить список фильмов');
      throw new Error();
    }
  },
);

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(ApiEndpoints.Promo);
      return data;
    } catch {
      errorHandler('Не удалось получить промо-фильм');
      throw new Error();
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(ApiEndpoints.Login);
  },
);

export const loginAction = createAsyncThunk<{token: string, avatarUrl: string, userId: number}, AuthData, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token, avatarUrl, id}} = await api.post<UserData>(ApiEndpoints.Login, {email, password});
      return {token: token, avatarUrl: avatarUrl, userId: id};
    } catch {
      errorHandler('Не выполнить вход');
      throw new Error();
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiEndpoints.Logout);
    dropToken();
    dropAvatarURL();
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const fetchFilmByID = createAsyncThunk<Film | null, string, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchFilmById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(`${ApiEndpoints.Films}/${filmId}`);
      return data;
    } catch {
      errorHandler('Не удалось загрузить фильм');
      throw new Error();
    }
  },
);

export const fetchReviewsByID = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Reviews>(`${ApiEndpoints.Comments}/${filmId}`);
      return data;
    } catch {
      errorHandler('Не удалось загрузить комментарии к фильму');
      throw new Error();
    }
  },
);

export const fetchRelatedByID = createAsyncThunk<Films, string, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(`${ApiEndpoints.Films}/${filmId}${ApiEndpoints.Similar}`);
      return data;
    } catch {
      errorHandler('Не удалось загрузить похожие фильмы');
      throw new Error();
    }
  },
);

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    try {
      await api.post<UserComment>(`${ApiEndpoints.Comments}/${filmId}`, {comment, rating});
      dispatch(redirectToRoute(`${ApiEndpoints.Films}/${filmId}`));
    } catch {
      errorHandler('Не удалось отправить комментарий');
      throw new Error();
    }
  },
);

export const changeFilmStatusToView = createAsyncThunk<Film, FilmStatus, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/changeFilmStatusToView',
  async ({filmId: id, isInMyList: isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Film>(`${ApiEndpoints.Favorite}/${id}/${isFavorite}`);
      return data;
    } catch {
      errorHandler('Не удалось изменить статус "К просмотру"');
      throw new Error();
    }
  },
);

export const changePromoStatusToView = createAsyncThunk<Film, FilmStatus, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/changePromoStatusToView',
  async ({filmId: id, isInMyList: isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Film>(`${ApiEndpoints.Favorite}/${id}/${isFavorite}`);
      return data;
    } catch {
      errorHandler('Не удалось изменить статус "К просмотру"');
      throw new Error();
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: UserState,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(ApiEndpoints.Favorite);
      return data;
    } catch {
      errorHandler('Не удалось список фильмов "К просмотру"');
      throw new Error();
    }
  },
);
