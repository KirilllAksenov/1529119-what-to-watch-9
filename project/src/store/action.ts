import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const setActiveGenre = createAction<string>('main/setActiveGenre');
export const getFilmsByGenre = createAction<Film[]>('genre/getFilmsByGenre');
