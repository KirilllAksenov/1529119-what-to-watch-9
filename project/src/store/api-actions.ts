import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {store, api} from '../store';
import {saveToken, dropToken} from '../api/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute, HttpCode} from '../const';
import {AuthData, UserData} from '../types/server';
import {redirectToRoute} from './action';
import { requireAuthorization } from './user-process/user-process';
import {Film, FilmStatus} from '../types/film';
import {Comment, CommentData} from '../types/comment';
import {loadComments, loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, setError, loadFavoriteFilms } from './app-data/app-data';
import { getGenres } from './app-process/app-process';


export const fetchFilmsAction = createAsyncThunk(
  '/loadFilms',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    const genres = getGenres(data);
    store.dispatch(loadFilms({data, genres}));
  },
);

export const fetchFilmAction = createAsyncThunk(
  '/loadFilm',
  async (filmId: number) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    store.dispatch(loadFilm({
      data,
      isLoaded: true,
    }));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk(
  '/loadSimilarFilms',
  async (filmId: number) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.SimilarFilm}`);
    store.dispatch(loadSimilarFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  '/loadPromoFilm',
  async () => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    store.dispatch(loadPromoFilm(data));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk(
  '/loadFavoriteFilms',
  async () => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    store.dispatch(loadFavoriteFilms({data}));
  },
);

export const fetchCommentAction = createAsyncThunk(
  '/loadComments',
  async (filmId: number) => {
    const {data} = await api.get<Comment>(`${APIRoute.Comments}/${filmId}`);
    store.dispatch(loadComments(data));
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
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization({
        authorizationStatus: AuthorizationStatus.Auth,
        data,
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === HttpCode.UNAUTHORIZED) {
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

export const changeFilmFavoriteStatus = createAsyncThunk(
  '/changeFilmFavoriteStatus',
  async ({filmId: id, status: isFavorite}: FilmStatus) => {
    const {data} = await api.post<FilmStatus>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
    store.dispatch(loadFilm({data, isLoaded: true}));
  },
);

export const changePromoFilmFavoriteStatus = createAsyncThunk(
  '/changePromoFilmFavoriteStatus',
  async ({filmId, status}: FilmStatus) => {
    const {data} = await api.post<FilmStatus>(`${APIRoute.Favorite}/${filmId}/${status}`);
    store.dispatch(loadPromoFilm(data));
  },
);
