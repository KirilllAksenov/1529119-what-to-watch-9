import React from 'react';
import { useAppSelector } from '../../hooks';
import Controls from '../controls/controls';

function FilmPoster(): JSX.Element {

  const promoFilm = useAppSelector((state) => state.promoFilm);
  const id = useAppSelector((state) => state.film.data.id);

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
        <Controls id={id}/>
      </div>
    </div>
  );
}

export default FilmPoster;


