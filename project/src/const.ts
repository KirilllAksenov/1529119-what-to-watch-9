export const DEFAULT_ACTIVE_GENRE = 'All genres';
export const MAX_GENRES = 9;
export const INITIAL_SHOW_FILM_COUNT = 8;
export const BACKEND_URL = 'https://9.react.pages.academy/wtw/';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum ApiRoute {
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
  ResetShowedFilmsCount = 'Reset showed films count',
  RequireAuthorization = 'Require authorization',
  SetError = 'Set error',
  LoadFilms = 'Load films',
  LoadSimilarFilms = 'Load similar films',
  LoadFilm = 'Load film',
  LoadPromoFilm = 'Load promo film',
  LoadComments = 'Load comments',
  Login = 'Login',
  Logout = 'Logout',
  AddComment = 'Add comment',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
