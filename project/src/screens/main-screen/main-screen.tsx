import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getInitialFilms, getPromoFilm} from '../../store/app-data/app-data';
import { filterFilmsByGenre, getFilteredFilmsByGenre, getShowedFilmsCount,  getGenres } from '../../store/app-process/app-process';
import Logo from '../../components/logo/logo';
import Login from '../../components/login/login';
import FilmDesctop from '../../components/film-desctop/film-desctop';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const initialFilms = useAppSelector(getInitialFilms);

  dispatch(filterFilmsByGenre(initialFilms));


  const filteredFilmsByGenre = useAppSelector(getFilteredFilmsByGenre);
  const showedFilmsCount = useAppSelector(getShowedFilmsCount);
  const filmsToShow = filteredFilmsByGenre.slice(0, showedFilmsCount);
  const genres = getGenres(initialFilms);
  const promoFilm = useAppSelector(getPromoFilm);

  if (!promoFilm) {
    return <NotFoundScreen/>;
  }
  //! удалил isLoading


  const {backgroundImage, name, posterImage } = promoFilm;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <Login/>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <FilmDesctop film={promoFilm}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList films={filmsToShow}/>
          <ShowMoreButton />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
