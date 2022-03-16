import { Film } from '../types/film';

export const films: Film[] = [];

const LINK_GET_FILMS = 'https://9.react.pages.academy/wtw/films/';

const response = await fetch(LINK_GET_FILMS);

const commits = await response.json();

new Set(commits.map((commit: { genre: string }) => commit.genre));

