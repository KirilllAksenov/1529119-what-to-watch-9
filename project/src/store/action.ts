import { createAction } from '@reduxjs/toolkit';

export const updateSelectedGenre = createAction<string>('main/updateSelectedGenre');
