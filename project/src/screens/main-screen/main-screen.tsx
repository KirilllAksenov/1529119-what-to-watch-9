import FilmPoster from '../../components/film-poster/film-poster';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Login from '../../components/login/login';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ButtonShowMore from '../../components/button-show-more/button-show-more';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { DEFAULT_ACTIVE_GENRE } from '../../const';

function MainScreen(): JSX.Element {
  const [genres, setGenres] = useState<string[]>([]);
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const films = useAppSelector((state) => state.films);
  const filmsList = (activeGenre === 'All genres') ? films : films.filter(({genre}) => activeGenre === genre);
  const {name, backgroundImage } = films[0];
  useEffect(() => {
    setGenres([DEFAULT_ACTIVE_GENRE, ...new Set(films.map((film) => film.genre))]);
  }, [films]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <Login/>
        </header>

        <div className="film-card__wrap">
          <FilmPoster films={films}/>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <GenreList genres={genres}/>
          </ul>
          <FilmsList films={filmsList}/>
          <ButtonShowMore/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
