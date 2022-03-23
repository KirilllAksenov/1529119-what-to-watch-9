import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const';

export const setActiveGenre = createAction(Action.setActiveGenre, (genre) => ({
  payload: genre,
}));

export const showMoreFilms = createAction(Action.ShowMoreFilms);

export const resetShowedFilmsCount = createAction(Action.ResetShowedFilmsCount);
