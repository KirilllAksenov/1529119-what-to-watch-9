import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { getFilms } from '../API/api';

export const store = configureStore({reducer});
export const films = getFilms();
