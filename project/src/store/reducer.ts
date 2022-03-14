import { createReducer } from '@reduxjs/toolkit';
import { updateSelectedGenre } from './action';

const initialState = {
  selectedGenre: 'All genres',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSelectedGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export {reducer};
