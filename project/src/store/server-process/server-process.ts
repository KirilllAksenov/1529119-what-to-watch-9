import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { Comment } from '../../types/comment';
import { Film} from '../../types/film';
import { ServerProcess, State, Unknown} from '../../types/state';

const initialState: ServerProcess = {
  film: {
    data: {} as Film,
    isLoaded: false,
    similarFilms: [] as Film[],
    isFound: 'UNKNOWN',

    comments: {
      data: {} as Comment[],
      isLoaded: false,
    },
  },

  favoriteFilms: {
    data: {} as Film[],
    isLoaded: false,
  },

  films: {
    data: [] as Film[],
    isLoaded: false,
    filteredFilmsByGenre: [] as Film[],
  },

  initialFilms: [] as Film[],

  promoFilm: {} as Film,

  error: '',
};

export const serverProcess = createSlice({
  name: NameSpace.server,
  initialState,
  reducers: {
    filterFilmsByGenre: (state, action) => {
      state.films.filteredFilmsByGenre = action.payload === DEFAULT_ACTIVE_GENRE ? state.initialFilms : state.initialFilms.filter((film) => film.genre === action.payload);
    },
    loadFilms: (state, action) => {
      state.films.data = action.payload.data;
      state.films.isLoaded = true;
    },
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms.data = action.payload.data;
      state.favoriteFilms.isLoaded = true;
    },
    loadFilm: (state, action) => {
      state.film.data = action.payload.data;
      state.film.isLoaded = action.payload.isLoaded;
      state.film.isFound = action.payload.isFound;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.film.similarFilms = action.payload;
    },
    loadComments: (state, action) => {
      state.film.comments.data = action.payload;
      state.film.comments.isLoaded = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getFilms = (state: State): Film[] => state[NameSpace.server].films.data;
export const getFilm = (state: State): Film => state[NameSpace.server].film.data;
export const getPromoFilm = (state: State): Film => state[NameSpace.server].promoFilm;
export const getSimilarFilms = (state: State): Film[]  => state[NameSpace.server].film.similarFilms;
export const getFavoriteFilms = (state: State): Film[]  => state[NameSpace.server].favoriteFilms.data;

export const getFavoriteFilmsStatus = (state: State): boolean => state[NameSpace.server].favoriteFilms.isLoaded;
export const getLoadedFilmsStatus = (state: State): boolean => state[NameSpace.server].films.isLoaded;
export const getFoundedFilmStatus = (state: State): boolean | Unknown => state[NameSpace.server].film.isFound;

export const getComments = (state: State): Comment[] => state[NameSpace.server].film.comments.data;
export const getLoadedCommentsStatus = (state: State): boolean => state[NameSpace.server].film.comments.isLoaded;

export const {loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, loadComments, setError, filterFilmsByGenre, loadFavoriteFilms} = serverProcess.actions;
