import FilmPoster from '../film-poster/film-poster';
import FilmCard from '../film-card/film-card';
import {Fragment} from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import Login from '../login/login';

type MainScreenProps = {
  name: string,
  genre: string,
  released: number,
}

function MainScreen({name: filmTitle, genre: filmGenre, released: releaseDate}: MainScreenProps): JSX.Element {
  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
          <FilmPoster filmTitle={filmTitle} filmGenre={filmGenre} releaseDate={releaseDate}/>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="/somepage"className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage"className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage"className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/somepage" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </Fragment>
  );
}

export default MainScreen;
