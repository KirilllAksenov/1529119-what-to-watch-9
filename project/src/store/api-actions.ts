import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from '../store';
import {saveToken, dropToken} from '../API/token';
import {APIRoute, AuthorizationStatus, Action, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData, UserData} from '../types/server';
import {loadComment, loadFilm, loadFilms, requireAuthorization, setError} from './action';
import {Film} from '../types/film';
import {Comment} from '../types/comment';
import { errorHandle } from '../API/error-handle';

export const clearErrorAction = createAsyncThunk(
  '/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  Action.LoadFilms,
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk(
  Action.LoadFilm,
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Film);
      store.dispatch(loadFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  Action.LoadFilm,
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.PromoFilm);
      store.dispatch(loadFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentAction = createAsyncThunk(
  Action.LoadComments,
  async () => {
    try {
      const {data} = await api.get<Comment>(APIRoute.Comments);
      store.dispatch(loadComment(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  Action.RequireAuthorization,
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  Action.Login,
  async({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  Action.Logout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);
