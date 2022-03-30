import FilmPoster from '../../components/film-poster/film-poster';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Login from '../../components/login/login';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const genres = useAppSelector((state) => state.films.genres);

  const filmsCount = useAppSelector((state) => state.films.data.length);

  const showedFilmsCount = useAppSelector((state) => state.showedFilmsCount);

  const films = useAppSelector((state) => state.films.data).slice(0, showedFilmsCount);

  const promoFilm = useAppSelector((state) => state.promoFilm);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
        </header>
        <Login/>

        <div className="film-card__wrap">
          <FilmPoster />
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList films={films}/>
          { showedFilmsCount >= filmsCount
            ? null
            : <ShowMoreButton showedFilmsCount={showedFilmsCount} filmsCount={filmsCount}/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
