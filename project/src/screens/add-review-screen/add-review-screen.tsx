import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import Login from '../../components/login/login';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm, getLoadedFilmsStatus } from '../../store/app-data/app-data';
import LoaderScreen from '../loader-screen/loader-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function AddReviewScreen() {
  const params = useParams();
  const filmId = Number(params.id);
  const dispatch = useAppDispatch();
  const isFilmLoaded = useAppSelector(getLoadedFilmsStatus);
  const film = useAppSelector(getFilm);

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
  },[dispatch, filmId]);

  if (!film) {
    return <NotFoundScreen/>;
  }

  if (!isFilmLoaded) {
    return <LoaderScreen />;
  }

  const {name, id, posterImage, backgroundImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`}className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`}className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <Login/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <FormReview/>
      </div>
    </section>
  );
}

export default AddReviewScreen;
