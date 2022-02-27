import { Film } from '../types/film';

export const films: Film[] = [];

const LINK_GET_FILMS = 'https://9.react.pages.academy/wtw/films/';

function getData () {
  fetch(LINK_GET_FILMS)
    .then((response) => response.json())
    .then((data) => data.forEach(((element: Film) => films.push(element))));
}

getData();

