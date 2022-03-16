import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_GENRE } from '../const';
import { Film } from '../types/film';
import { getFilmsByGenre, setActiveGenre } from './action';


type Props = {
  activeGenre: string,
  films: Film[],
};

const initialState: Props = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    });
});

export {reducer};
