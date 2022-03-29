import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_ACTIVE_GENRE, INITIAL_SHOW_FILM_COUNT, MAX_GENRES } from '../const';
import { Film } from '../types/film';
import { loadComment, loadFilm, loadFilms, requireAuthorization, resetShowedFilmsCount, setActiveGenre, showMoreFilms, setError } from './action';

type State = {
  activeGenre: string,
  films: Film[],
  initialFilms: Film[],
  genres: string[],
  showedFilmsCount: number,
  loadFilms: Film[];
  authorizationStatus: AuthorizationStatus,
  loadFilm: Film[],
  loadComments: Comment[],
  error: string;
  isDataLoading: boolean;
};

const initialState: State = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  initialFilms: [],
  films: [],
  loadFilms: [],
  loadFilm: [],
  loadComments: [],
  showedFilmsCount: INITIAL_SHOW_FILM_COUNT,
  genres: [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from([], ({genre}) => genre)])].slice(0, MAX_GENRES),
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.showedFilmsCount = INITIAL_SHOW_FILM_COUNT;
      state.activeGenre = action.payload;
      state.films = state.activeGenre === DEFAULT_ACTIVE_GENRE ? state.films :
        state.initialFilms.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(showMoreFilms, (state) => {
      state.showedFilmsCount = state.showedFilmsCount + INITIAL_SHOW_FILM_COUNT;
    })
    .addCase(resetShowedFilmsCount, (state) => {
      state.showedFilmsCount = INITIAL_SHOW_FILM_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.loadFilms = action.payload;
      state.isDataLoading = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.loadFilm = action.payload;
      state.isDataLoading = true;
    })
    .addCase(loadComment, (state, action) => {
      state.loadComments = action.payload;
      state.isDataLoading = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
