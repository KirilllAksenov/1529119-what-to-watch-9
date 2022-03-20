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

export const DEFAULT_ACTIVE_GENRE = 'All genres';
export const MAX_GENRES = 9;

export enum Action {
  setActiveGenre = 'set active genre',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
