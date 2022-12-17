import {createSlice} from '@reduxjs/toolkit';
import {FilmPageTabs, NameSpace} from '../../const';
import {
  changeFilmStatusToView,
  fetchReviewsByID,
  fetchFilmByID,
  fetchRelatedByID
} from '../api-actions';
import {FilmMeta} from '../../types/film/film-meta';
import {filterRelated} from '../../utils/filter-related';

const initialState: FilmMeta = {
  film: null,
  related: [],
  reviews: [],
  filmPageTab: FilmPageTabs.Overview,
  isFilmLoadingStatus: null,
  isFilmFoundStatus: null
};

export const filmMetaProcessor = createSlice({
  name: NameSpace.FilmScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => {
      state.filmPageTab = action.payload;
    },
    resetFilmTab: (state) => {
      state.filmPageTab = FilmPageTabs.Overview;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isFilmLoadingStatus = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;

        state.isFilmFoundStatus = true;
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchFilmByID.rejected, (state, action) => {
        state.isFilmFoundStatus = false;
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchRelatedByID.fulfilled, (state, action) => {
        state.related = filterRelated(action.payload, state.film?.id);
      })
      .addCase(fetchReviewsByID.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});

export const {
  changeFilmTab,
} = filmMetaProcessor.actions;
