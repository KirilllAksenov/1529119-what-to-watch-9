import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_ACTIVE_GENRE, INITIAL_SHOW_FILM_COUNT } from '../const';
import { Comments } from '../types/comment';
import { Film, Films } from '../types/film';
import { UserData } from '../types/server';
import { loadComment, loadFilm, loadFilms, requireAuthorization, resetShowedFilmsCount, setActiveGenre, showMoreFilms, setError, loadPromoFilm, loadSimilarFilms } from './action';

type InitialState = {
  activeGenre: string,
  initialFilms: Films,
  promoFilm: Film,
  showedFilmsCount: number,
  error: string;

  films: {
    data: Films,
    similarFilms: Films,
    genres: string[],
    isDataLoaded: boolean;
  };

  film: {
    data: Film,
    isDataLoaded: boolean;
    errorLoad: boolean;

    comments: {
      data: Comments,
      isDataLoaded: boolean;
    };
  };

  user: {
    authorizationStatus: AuthorizationStatus,
    data: UserData,
  };
}

const initialState: InitialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  initialFilms: {} as Films,
  showedFilmsCount: INITIAL_SHOW_FILM_COUNT,
  error: '',

  films: {
    data: [] as Films,
    genres: [],
    isDataLoaded: false,
    similarFilms: [] as Films,
  },

  film: {
    data: {} as Film,
    isDataLoaded: false,
    errorLoad: false,

    comments: {
      data: {} as Comments,
      isDataLoaded: false,
    },
  },

  promoFilm: {} as Film,

  user: {
    authorizationStatus: AuthorizationStatus.Unknown,
    data: {} as UserData,
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.showedFilmsCount = INITIAL_SHOW_FILM_COUNT;
      state.activeGenre = action.payload;
      state.films.data = state.activeGenre === DEFAULT_ACTIVE_GENRE ? state.initialFilms :
        state.initialFilms.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(showMoreFilms, (state) => {
      state.showedFilmsCount = state.showedFilmsCount + INITIAL_SHOW_FILM_COUNT;
    })
    .addCase(resetShowedFilmsCount, (state) => {
      state.showedFilmsCount = INITIAL_SHOW_FILM_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.initialFilms = action.payload.data;
      state.films.data = action.payload.data;
      state.films.genres = action.payload.genres;
      state.films.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film.data = action.payload;
      state.film.isDataLoaded = action.payload.isLoaded;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.films.similarFilms = action.payload;
    })
    .addCase(loadComment, (state, action) => {
      state.film.comments = action.payload;
      state.film.comments.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.user.authorizationStatus = action.payload.authorizationStatus;
      state.user.data = action.payload.data;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
