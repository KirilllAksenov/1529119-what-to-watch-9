import React from 'react';
import { useAppSelector } from '../../hooks';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import { getPromoFilm } from '../../store/app-data/app-data';
import FilmButtonsControl from '../film-card-buttons/film-card-buttons';

function FilmPoster(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);

  if (!promoFilm) {
    return <NotFoundScreen/>;
  }

  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{promoFilm.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{promoFilm.genre}</span>
          <span className="film-card__year">{promoFilm.released}</span>
        </p>
        <FilmButtonsControl film={promoFilm} />
      </div>
    </div>
  );
}

export default FilmPoster;


