import { Film, Promo } from '../../types/film';
import FilmPoster from '../../components/film-poster/film-poster';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Login from '../../components/login/login';

import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ButtonShowMore from '../../components/button-show-more/button-show-more';

type Props = {
  films: Film[];
  genres: string[];
  promo: Promo;
}

function MainScreen({films, genres, promo}: Props): JSX.Element {
  const { name, backgroundImage } = films[0];
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <Login/>
          </ul>
        </header>

        <div className="film-card__wrap">
          <FilmPoster promo={promo}/>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList films={films}/>
          <ButtonShowMore/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
