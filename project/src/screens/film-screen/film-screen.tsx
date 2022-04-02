import { useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Tabs from '../../components/tabs/tabs';
import LoaderScreen from '../loader-screen/loader-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MAX_SIMILAR_FILMS } from '../../const';
import { useEffect } from 'react';
import { fetchSimilarFilmsAction, fetchFilmAction, fetchCommentAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Logotip from '../../components/logotip/logotip';
import Controls from '../../components/controls/controls';

function FilmScreen(): JSX.Element{
  const params = useParams<string>();

  const filmId = Number(params.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
    dispatch(fetchCommentAction(filmId));
  },[dispatch, filmId]);

  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.films.similarFilms).slice(0, MAX_SIMILAR_FILMS);
  const comments = useAppSelector((state) => state.film.comments.data);
  const isDataLoaded = useAppSelector((state) => state.film.isDataLoaded);
  const {backgroundImage, posterImage, name, released, genre, id} = film.data;

  if (film.errorLoad) {
    return <NotFoundScreen/>;
  }

  if (!isDataLoaded) {
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
              <Controls id={id}/>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <Tabs film={film.data} comments={comments}/>
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
