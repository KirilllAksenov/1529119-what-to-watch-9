import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from '../store';
import {saveToken, dropToken} from '../API/token';
import {APIRoute, AuthorizationStatus, Action, TIMEOUT_SHOW_ERROR, DEFAULT_ACTIVE_GENRE, MAX_GENRES, AppRoute, HTTP_CODE} from '../const';
import {AuthData, UserData} from '../types/server';
import {loadComment, loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, redirectToRoute, requireAuthorization, setError} from './action';
import {Film} from '../types/film';
import {Comment, CommentData} from '../types/comment';
import axios from 'axios';

const getGenres = (films: Film[]) => [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(films, ({genre}) => genre)])].slice(0, MAX_GENRES);

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
    const {data} = await api.get<Film[]>(APIRoute.Films);
    const genres = getGenres(data);
    store.dispatch(loadFilms({data, genres}));
  },
);

export const fetchFilmAction = createAsyncThunk(
  Action.LoadFilm,
  async (filmId: number) => {
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilm({data, isLoaded: true}));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HTTP_CODE.NOT_FOUND) {
          store.dispatch(loadFilm({isLoaded: false, errorLoad: true}));
        }
      }
    }

  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  Action.LoadFilm,
  async () => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    store.dispatch(loadPromoFilm(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk(
  Action.LoadSimilarFilms,
  async (filmId: number) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilm}`);
    store.dispatch(loadSimilarFilms(data));
  },
);

export const fetchCommentAction = createAsyncThunk(
  Action.LoadComments,
  async (filmId: number) => {
    const {data} = await api.get<Comment>(`${APIRoute.Comments}/${filmId}`);
    store.dispatch(loadComment(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  Action.RequireAuthorization,
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HTTP_CODE.UNAUTHORIZED) {
          store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
        }
      }
    }
  },
);

export const loginAction = createAsyncThunk(
  Action.Login,
  async({login: email, password}: AuthData) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth, data: data}));
    store.dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk(
  Action.Logout,
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  },
);

export const addComment = createAsyncThunk(
  Action.AddComment,
  async ({comment, rating, filmId}:CommentData) => {
    await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
  },
);
