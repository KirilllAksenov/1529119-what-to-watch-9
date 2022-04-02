import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Tabs from '../../components/tabs/tabs';
import LoaderScreen from '../loader-screen/loader-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Logotip from '../../components/logotip/logotip';
import Controls from '../../components/controls/controls';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSimilarFilmsAction, fetchFilmAction} from '../../store/api-actions';
import { getComments, getFilm, getFoundedFilmStatus, getLoadedFilmsStatus, getSimilarFilms } from '../../store/server-process/server-process';

function FilmScreen(): JSX.Element{
  const params = useParams<string>();

  const filmId = Number(params.id);

  const dispatch = useAppDispatch();

  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const comments = useAppSelector(getComments);
  const isFilmLoaded = useAppSelector(getLoadedFilmsStatus);
  const isFilmFound = useAppSelector(getFoundedFilmStatus);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
  },[dispatch, filmId]);

  const {backgroundImage, posterImage, name, released, genre} = film;

  if (isFilmFound !== 'UNKNOWN' && !isFilmFound) {
    return <NotFoundScreen />;
  }

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
            <Logotip/>
            <Login/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <Controls />
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
