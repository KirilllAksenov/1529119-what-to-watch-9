import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, FILMS_PER_PAGE, MAX_GENRES, NameSpace } from '../../const';
import { Film } from '../../types/film';
import { AppProcess, State } from '../../types/state';

const initialState: AppProcess = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  showedFilmsCount: FILMS_PER_PAGE,
  filteredFilmsByGenre: [] as Film[],
};

export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    filterFilmsByGenre: (state, action) => {
      state.filteredFilmsByGenre = state.activeGenre === DEFAULT_ACTIVE_GENRE ? action.payload : action.payload.filter((film: Film) => film.genre === state.activeGenre);
    },
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
  },
});

export const getGenres = (films: Film[]) => [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(films, ({genre}) => genre)])].slice(0, MAX_GENRES);
export const getActiveGenre = (state: State): string => state[NameSpace.app].activeGenre;
export const getShowedFilmsCount = (state: State): number => state[NameSpace.app].showedFilmsCount;
export const getFilteredFilmsByGenre = (state: State): Film[] => state[NameSpace.app].filteredFilmsByGenre;

export const {setGenre, resetShowedFilmsCount, showMoreFilms, filterFilmsByGenre} = appProcess.actions;
