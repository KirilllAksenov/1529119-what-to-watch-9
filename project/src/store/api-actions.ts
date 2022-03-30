import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from '../store';
import {saveToken, dropToken} from '../API/token';
import {APIRoute, AuthorizationStatus, Action, TIMEOUT_SHOW_ERROR, DEFAULT_ACTIVE_GENRE, MAX_GENRES, AppRoute} from '../const';
import {AuthData, UserData} from '../types/server';
import {loadComment, loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, redirectToRoute, requireAuthorization, setError} from './action';
import {Film, Films} from '../types/film';
import {Comment, CommentData} from '../types/comment';
import { errorHandle } from '../API/error-handle';

const getGenres = (films: Films) => [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(films, ({genre}) => genre)])].slice(0, MAX_GENRES);

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
      const {data} = await api.get<Films>(APIRoute.Films);
      const genres = getGenres(data);
      store.dispatch(loadFilms({data, genres}));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk(
  Action.LoadFilm,
  async (filmId: number) => {
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilm({data, isLoaded: true}));
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
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk(
  Action.LoadSimilarFilms,
  async (filmId: number) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilm}`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentAction = createAsyncThunk(
  Action.LoadComments,
  async (filmId: number) => {
    try {
      const {data} = await api.get<Comment>(`${APIRoute.Comments}/${filmId}`);
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth, data: data}));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    }
  },
);

export const logoutAction = createAsyncThunk(
  Action.Logout,
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const addComment = createAsyncThunk(
  Action.AddComment,
  async ({comment, rating, filmId}:CommentData) => {
    await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
  },
);
