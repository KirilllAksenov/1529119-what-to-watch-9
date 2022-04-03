export const DEFAULT_ACTIVE_GENRE = 'All genres';
export const MAX_GENRES = 9;
export const INITIAL_FILMS_COUNT = 8;
export const FILMS_PER_PAGE = 8;
export const MAX_SIMILAR_FILMS = 4;
export const BACKEND_URL = 'https://9.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 3000;
export const DEFAULT_RATING = 0;
export const DEFAULT_COMMENT = '';

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  SimilarFilm = '/similar',
  PromoFilm = '/promo',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTHORIZATION',
  NoAuth = 'NO_AUTHORIZATION',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  app ='APP',
}
