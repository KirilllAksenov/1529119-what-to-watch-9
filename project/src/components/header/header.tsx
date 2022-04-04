import React from 'react';
import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/app-data/app-data';
import FilmPoster from '../film-poster/film-poster';
import Login from '../login/login';
import Logotip from '../logotip/logotip';

function Header() {
  const promoFilm = useAppSelector(getPromoFilm);

  if (!promoFilm) {
    return <div>Not Found...</div>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logotip/>
        <Login/>
      </header>
      <div className="film-card__wrap">
        <FilmPoster />
      </div>
    </section>
  );
}

export default React.memo(Header);
