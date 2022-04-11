export const DEFAULT_ACTIVE_GENRE = 'All genres';
export const MAX_GENRES = 9;
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
  Films = '/fils',
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

export enum HttpCode {
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

export const playerButtonsControl = {
  Play: {
    width: 19,
    height: 19,
    xlinkHref: '#play-s',
    description: 'Play',
    className: 'player__play',
  },

  Pause: {
    width: 14,
    height: 21,
    xlinkHref: '#pause',
    description: 'Pause',
    className: 'player__play',
  },

  FullScreen: {
    width: 27,
    height: 27,
    xlinkHref: '#full-screen',
    description: 'Full screen',
    className: 'player__full-screen',
  },
};
