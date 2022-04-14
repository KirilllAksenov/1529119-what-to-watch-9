import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { getInitialFilms} from '../../store/app-data/app-data';
import { getFilteredFilmsByGenre, getShowedFilmsCount,  getGenres } from '../../store/app-process/app-process';
import PromoFilm from '../../components/promo-film/promo-film';

function MainScreen(): JSX.Element {
  const initialFilms = useAppSelector(getInitialFilms);
  const filteredFilmsByGenre = useAppSelector(getFilteredFilmsByGenre);
  const showedFilmsCount = useAppSelector(getShowedFilmsCount);
  const filmsToShow = filteredFilmsByGenre.slice(0, showedFilmsCount);
  const genres = getGenres(initialFilms);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList films={filmsToShow}/>
          <ShowMoreButton />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
