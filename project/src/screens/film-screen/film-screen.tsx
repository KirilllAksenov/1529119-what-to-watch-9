import {SyntheticEvent, useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Tabs from '../../components/tabs/tabs';
import LoaderScreen from '../loader-screen/loader-screen';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchSimilarFilmsAction,
  fetchFilmAction,
  changeFilmFavoriteStatus,
  fetchCommentAction
} from '../../store/api-actions';
import { getComments, getFilm, getLoadedFilmsStatus, getSimilarFilms } from '../../store/app-data/app-data';
import {AppRoute, AuthorizationStatus, MAX_SIMILAR_FILMS} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {PlayButton} from '../../components/play-button/play-button';
import {MyList} from '../../components/my-list/my-list';
import {redirectToRoute} from '../../store/action';

function FilmScreen(): JSX.Element{
  const params = useParams<string>();
  const filmId = Number(params.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchCommentAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
  },[dispatch, filmId]);

  const film = useAppSelector(getFilm);
  const user = useAppSelector(({USER}) => USER);

  const similarFilms = useAppSelector(getSimilarFilms).slice(0, MAX_SIMILAR_FILMS);
  const comments = useAppSelector(getComments);
  const isFilmLoaded = useAppSelector(getLoadedFilmsStatus);

  const handleMyListButtonClick = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (user.authorizationStatus === AuthorizationStatus.Auth) {
      if (film) {
        dispatch(changeFilmFavoriteStatus({filmId: film.id, status: film.isFavorite ? 0 : 1}));
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }, [user.authorizationStatus, film, dispatch]);

  if(!film) {
    return <NotFoundScreen/>;
  }

  const {backgroundImage, posterImage, name, released, genre} = film;

  if (!isFilmLoaded) {
    return <LoaderScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <Login/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton />
                <MyList onClick={handleMyListButtonClick} film={film} />
                {user.authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <Tabs film={film} comments={comments}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
