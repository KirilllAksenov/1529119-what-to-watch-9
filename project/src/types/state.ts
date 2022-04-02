import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Comment } from './comment.js';
import { Film } from './film.js';
import { UserData } from './server.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  data: UserData,
};

export type AppProcess = {
  activeGenre: string;
  showedFilmsCount: number;
  filteredFilmsByGenre: Film[];
}
export type ServerProcess = {
  films: {
    data: Film[];
    isLoaded: boolean;
    filteredFilmsByGenre: Film[];
  }

  favoriteFilms: {
    data: Film[];
    isLoaded: boolean;
  }

  film: {
    data: Film;
    isLoaded: boolean;
    similarFilms: Film[];
    isFound: boolean | Unknown;

    comments: {
      data: Comment[];
      isLoaded: boolean;
    };
  }

  initialFilms: Film[];

  promoFilm: Film;

  error: string;
};

export type Unknown = 'UNKNOWN';
