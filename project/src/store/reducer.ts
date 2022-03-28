import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE, INITIAL_SHOW_FILM_COUNT, MAX_GENRES } from '../const';
import { films as filmItems } from '../mocks/films';
import { Film } from '../types/film';
import { resetShowedFilmsCount, setActiveGenre, showMoreFilms } from './action';

type State = {
  activeGenre: string,
  films: Film[],
  initialFilms: Film[],
  genres: string[],
  showedFilmsCount: number,
};

const initialState: State = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  initialFilms: filmItems,
  films: filmItems,
  showedFilmsCount: INITIAL_SHOW_FILM_COUNT,
  genres: [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(filmItems, ({genre}) => genre)])].slice(0, MAX_GENRES),
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
    });
});
