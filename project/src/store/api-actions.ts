import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from '../store';
import {saveToken, dropToken} from '../API/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, DEFAULT_ACTIVE_GENRE, MAX_GENRES, AppRoute, HTTP_CODE} from '../const';
import {AuthData, UserData} from '../types/server';
import {loadComment, loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, redirectToRoute, requireAuthorization, setError} from './action';
import {Film} from '../types/film';
import {Comment, CommentData} from '../types/comment';
import axios from 'axios';

const getGenres = (films: Film[]) => [...new Set([DEFAULT_ACTIVE_GENRE, ...Array.from(films, ({genre}) => genre)])].slice(0, MAX_GENRES);

export const fetchFilmsAction = createAsyncThunk(
  '/loadFilms',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    const genres = getGenres(data);
    store.dispatch(loadFilms({data, genres}));
  },
);

export const fetchFilmAction = createAsyncThunk(
  'loadFilm',
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

export const fetchSimilarFilmsAction = createAsyncThunk(
  'loadSimilarFilms',
  async (filmId: number) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilm}`);
    store.dispatch(loadSimilarFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'loadPromoFilm',
  async () => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    store.dispatch(loadPromoFilm(data));
  },
);

export const fetchCommentAction = createAsyncThunk(
  'loadComments',
  async (filmId: number) => {
    const {data} = await api.get<Comment>(`${APIRoute.Comments}/${filmId}`);
    store.dispatch(loadComment(data));
  },
);

export const addComment = createAsyncThunk(
  '/addComment',
  async ({comment, rating, filmId}:CommentData) => {
    await api.post<CommentData>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
  },
);

export const checkAuthAction = createAsyncThunk(
  '/requireAuthorization',
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
  '/login',
  async({login: email, password}: AuthData) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.Auth, data: data}));
    store.dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk(
  '/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  },
);

export const clearErrorAction = createAsyncThunk(
  '/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
