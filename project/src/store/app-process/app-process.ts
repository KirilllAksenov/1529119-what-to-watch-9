import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, FILMS_PER_PAGE, MAX_GENRES, NameSpace } from '../../const';
import { Film } from '../../types/film';
import { State } from '../../types/state';

export type AppProcess = {
  activeGenre: string;
  showedFilmsCount: number;
  filteredFilmsByGenre: Film[];
  isDisabledForm: boolean;
}

const initialState: AppProcess = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  showedFilmsCount: FILMS_PER_PAGE,
  filteredFilmsByGenre: [],
  isDisabledForm: false,
};

export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.showedFilmsCount = FILMS_PER_PAGE;
      state.activeGenre = action.payload;
    },
    showMoreFilms: (state) => {
      state.showedFilmsCount = state.showedFilmsCount + FILMS_PER_PAGE;
    },
    resetShowedFilmsCount: (state) => {
      state.showedFilmsCount = FILMS_PER_PAGE;
    },
    enableForm: (state) => {
      state.isDisabledForm = false;
    },
    disableForm: (state) => {
      state.isDisabledForm = true;
    },
  },
});

export const getGenres = (films: Film[]) => [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(films, ({genre}) => genre)])].slice(0, MAX_GENRES);
export const getActiveGenre = (state: State): string => state[NameSpace.app].activeGenre;
export const getShowedFilmsCount = (state: State): number => state[NameSpace.app].showedFilmsCount;
export const getIsDisabledForm = (state: State): boolean => state[NameSpace.app].isDisabledForm;
export const {setGenre, showMoreFilms} = appProcess.actions;

export const getFilteredFilmsByGenre = (state: State): Film[] => {
  const {activeGenre} = state[NameSpace.app];
  const {initialFilms} = state[NameSpace.data];
  if (activeGenre === DEFAULT_ACTIVE_GENRE) {
    return initialFilms;
  }
  return initialFilms.filter((film) => film.genre === activeGenre);
};
