import {createSlice} from '@reduxjs/toolkit';
import {CARDS_PER_STEP, DEFAULT_GENRE, NameSpace} from '../../const';
import {
  changeFilmStatusToView,
  changePromoStatusToView,
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchPromoAction
} from '../api-actions';
import {filterFilmsByGenre} from '../../utils/filter-films-by-genre';
import {MainPageMeta} from '../../types/main-page-meta';

const initialState: MainPageMeta = {
  films: [],
  promo: null,
  isDataLoaded: false,
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  cardCount: 0,
  favoriteFilms: [],
  favoriteCount: 0
};

export const mainPageProcessor = createSlice({
  name: NameSpace.MainScreen,
  initialState,
  reducers: {
    resetMainScreen: (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_PER_STEP ? state.films.length : CARDS_PER_STEP;
    },
    changeGenre: (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_PER_STEP ?
        filteredFilms.length :
        CARDS_PER_STEP;
    },

    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + CARDS_PER_STEP) < state.filteredFilms.length ?
        state.cardCount + CARDS_PER_STEP :
        state.filteredFilms.length;
    },

    resetCardCount: (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_PER_STEP ?
        state.filteredFilms.length :
        8;
    },

    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        const films = action.payload;

        state.films = films;
        state.filteredFilms = films;
        state.cardCount = films.length < CARDS_PER_STEP ? films.length : 8;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = action.payload.length;
        state.isDataLoaded = false;
      })
      .addCase(changePromoStatusToView.fulfilled, (state, action) => {
        state.promo = action.payload;

        if (action.payload.isInMyList) {
          state.favoriteCount = state.favoriteCount + 1;
        } else {
          state.favoriteCount = state.favoriteCount - 1;
        }
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        if (action.payload.isInMyList) {
          state.favoriteCount = state.favoriteCount + 1;
        } else {
          state.favoriteCount = state.favoriteCount - 1;
        }
      });
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
} = mainPageProcessor.actions;
