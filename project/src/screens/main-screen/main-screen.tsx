import FilmPoster from '../../components/film-poster/film-poster';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Login from '../../components/login/login';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ButtonShowMore from '../../components/button-show-more/button-show-more';
import { useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const genres = useAppSelector((state) => state.activeGenre);

  const films = useAppSelector((state) => state.films);

  const {name, backgroundImage } = films[0];
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
          <FilmsList films={films}/>
          <ButtonShowMore/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
