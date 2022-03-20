import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE } from '../const';
import { dataGenres, films } from '../mocks/films';
import { Film } from '../types/film';
import { setActiveGenre } from './action';


type State = {
  activeGenre: string,
  films: Film[],
  genres: string[],
};

const initialState: State = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: films,
  genres: dataGenres,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.films = state.activeGenre === DEFAULT_ACTIVE_GENRE ? state.films :
        state.films.filter((film: { genre: string; }) => film.genre === state.activeGenre);
    });});
