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

export const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
