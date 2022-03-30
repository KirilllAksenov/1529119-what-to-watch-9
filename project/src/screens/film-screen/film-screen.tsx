import { Link, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import LoaderScreen from '../loader-screen/loader-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
//import NotFoundScreen from '../not-found-screen/not-found-screen';

function FilmScreen(): JSX.Element{
  const params = useParams<string>();

  const filmId = Number(params.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetFilmAction(filmId));
    dispatch(fetchGetSimilarFilmsAction(filmId));
  },[dispatch, filmId]);

  const {film, films, user} = useAppSelector((state) => state);

  const activeFilm = film.data;

  const commentsActiveFilm = film.comments.data;

  const {name, id, posterImage, genre, released, backgroundImage} = activeFilm;

  //!обработка ошибок на слушай отсутствия подключения к интернету NOT FOUND SCREEN
  //if (film.error) {
  //return <NotFoundScreen/>
  //}

  if (!film.isDataLoaded) {
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
                <Link to="/player/:id">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <Link to="/mylist">
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </Link>

                {user.authorizationStatus === AuthorizationStatus.Auth
                  ?  <Link to={`/films/${id}/review`}className="btn film-card__button">Add review</Link>
                  : ' '}

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
              <Tabs film={activeFilm} comments={commentsActiveFilm}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.similarFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmScreen;
function fetchGetFilmAction(filmId: number): any {
  throw new Error('Function not implemented.');
}

function fetchGetSimilarFilmsAction(filmId: number): any {
  throw new Error('Function not implemented.');
}

