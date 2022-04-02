import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setActiveGenre = createAction('/activeGenre', (genre) => ({
  payload: genre,
}));

export const showMoreFilms = createAction('/showMoreFilms');

export const resetShowedFilmsCount = createAction('/resetFilms');

export const loadFilms = createAction(
  '/loadFilms',
  (films) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  'loadFilm',
  (film) => ({
    payload: film,
  }),
);

export const loadSimilarFilms = createAction(
  'loadSimilarFilms',
  (similarFilms) => ({
    payload: similarFilms,
  }),
);

export const loadPromoFilm = createAction(
  'loadPromoFilm',
  (promoFilm) => ({
    payload: promoFilm,
  }),
);

export const loadComment = createAction(
  'loadComments',
  (comments) => ({
    payload: comments,
  }),
);

export const addComment = createAction('/addComment');

export const requireAuthorization = createAction(
  '/requireAuthorization',
  (data) => ({
    payload: data,
  }),
);

export const login = createAction(
  '/login',
  (data) => ({
    payload: data,
  }),
);

export const logout = createAction('/logout');

export const setError = createAction<string>('/setError');

export const clearErrorAction = createAction<string>('/clearError');

export const redirectToRoute = createAction<AppRoute>('/redirect');
