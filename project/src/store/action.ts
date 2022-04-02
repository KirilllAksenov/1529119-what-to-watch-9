import {createAction} from '@reduxjs/toolkit';
import {Action, AppRoute} from '../const';

export const setActiveGenre = createAction(Action.setActiveGenre, (genre) => ({
  payload: genre,
}));

export const showMoreFilms = createAction(Action.ShowMoreFilms);

export const resetShowedFilmsCount = createAction(Action.ResetShowedFilmsCount);

export const requireAuthorization = createAction(
  Action.RequireAuthorization,
  (data) => ({
    payload: data,
  }),
);

export const loadFilms = createAction(
  Action.LoadFilms,
  (films) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  Action.LoadFilm,
  (film) => ({
    payload: film,
  }),
);

export const loadSimilarFilms = createAction(
  Action.LoadSimilarFilms,
  (similarFilms) => ({
    payload: similarFilms,
  }),
);

export const loadPromoFilm = createAction(
  Action.LoadPromoFilm,
  (promoFilm) => ({
    payload: promoFilm,
  }),
);

export const loadComment = createAction(
  Action.LoadComments,
  (comments) => ({
    payload: comments,
  }),
);

export const login = createAction(
  Action.Login,
  (data) => ({
    payload: data,
  }),
);

export const setError = createAction<string>(Action.SetError);

export const clearErrorAction = createAction<string>(Action.ClearErrorAction);

export const addComment = createAction(Action.AddComment);

export const logout = createAction(Action.Logout);

export const redirectToRoute = createAction<AppRoute>(Action.Redirect);
