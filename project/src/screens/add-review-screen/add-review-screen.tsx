import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import Login from '../../components/login/login';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSimilarFilmsAction, fetchFilmAction } from '../../store/api-actions';
import LoaderScreen from '../loader-screen/loader-screen';

function AddReviewScreen() {
  const params = useParams();
  const filmId = Number(params.id);
  const dispatch = useAppDispatch();
  const {data, isDataLoaded} = useAppSelector((state) => state.film);
  const {name, id, posterImage, backgroundImage} = data;

  useEffect(() => {
    dispatch(fetchFilmAction(filmId));
    dispatch(fetchSimilarFilmsAction(filmId));
  },[dispatch, filmId]);

  if (!isDataLoaded) {
    return <LoaderScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
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
