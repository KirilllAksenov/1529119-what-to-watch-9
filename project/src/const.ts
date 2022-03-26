export const DEFAULT_ACTIVE_GENRE = 'All genres';
export const MAX_GENRES = 9;
export const INITIAL_SHOW_FILM_COUNT = 8;

export enum AppRoute {
  Main = '/',
  SingIn = '/login',
  Film = '/film/:id',
  MyList = '/mylist',
  Player = '/player/:id',
  AddReview = '/film/:id/review',
}

export enum AuthorizationStatus {
  Auth = 'AUTHORIZATION',
  NoAuth = 'NO_AUTHORIZATION',
  Unknown = 'UNKNOWN',
}

export enum Action {
  setActiveGenre = 'Set active genre',
  ShowMoreFilms = 'Show more films',
  ResetShowedFilmsCount = 'Reset showed films count'
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
