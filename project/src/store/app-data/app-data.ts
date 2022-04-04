import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, NameSpace } from '../../const';
import { Comment } from '../../types/comment';
import { Film} from '../../types/film';
import { State, Unknown} from '../../types/state';

export type AppData = {
  film: {
    data?: Film;
    isLoaded: boolean;
    similarFilms: Film[];
    isFound: boolean | Unknown;
    comments: {
      data: Comment[];
      isLoaded: boolean;
    };
  }
  films: {
    data: Film[];
    isLoaded: boolean;
    filteredFilmsByGenre: Film[];
  }
  favoriteFilms: {
    data: Film[];
    isLoaded: boolean;
  }
  initialFilms: Film[];
  promoFilm?: Film;
  error: string;
};

const initialState: AppData = {
  film: {
    data: undefined,
    isLoaded: false,
    similarFilms: [],
    isFound: 'UNKNOWN',
    comments: {
      data: [],
      isLoaded: false,
    },
  },
  films: {
    data: [],
    isLoaded: false,
    filteredFilmsByGenre: [],
  },
  favoriteFilms: {
    data: [],
    isLoaded: false,
  },
  initialFilms: [],
  promoFilm: undefined,
  error: '',
};

export const AppData = createSlice({
  name: NameSpace.data,
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

export const getFilms = (state: State): Film[] | [] => state[NameSpace.data].films.data;
export const getFilm = (state: State): Film | undefined => state[NameSpace.data].film.data;
export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.data].promoFilm;
export const getSimilarFilms = (state: State): Film[]  => state[NameSpace.data].film.similarFilms;
export const getFavoriteFilms = (state: State): Film[]  => state[NameSpace.data].favoriteFilms.data;

export const getFavoriteFilmsStatus = (state: State): boolean => state[NameSpace.data].favoriteFilms.isLoaded;
export const getLoadedFilmsStatus = (state: State): boolean => state[NameSpace.data].films.isLoaded;
export const getFoundedFilmStatus = (state: State): boolean | Unknown => state[NameSpace.data].film.isFound;

export const getComments = (state: State): Comment[] => state[NameSpace.data].film.comments.data;
export const getLoadedCommentsStatus = (state: State): boolean => state[NameSpace.data].film.comments.isLoaded;

export const {loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, loadComments, setError, filterFilmsByGenre, loadFavoriteFilms} = AppData.actions;
