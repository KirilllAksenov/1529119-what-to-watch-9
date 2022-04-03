import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms} from '../../store/app-data/app-data';
import { useEffect } from 'react';
import { filterFilmsByGenre, getFilteredFilmsByGenre, getShowedFilmsCount,  getGenres } from '../../store/app-process/app-process';

function MainScreen(): JSX.Element {

  const dispatch = useAppDispatch();
  const initialFilms = useAppSelector(getFilms);
  const filteredFilmsByGenre = useAppSelector(getFilteredFilmsByGenre);
  const filmsCount = filteredFilmsByGenre.length;
  const showedFilmsCount = useAppSelector(getShowedFilmsCount);
  const filmsToShow = filteredFilmsByGenre.slice(0, showedFilmsCount);
  const genres = getGenres(initialFilms);

  useEffect(() => {
    dispatch(filterFilmsByGenre(initialFilms));
  }, [dispatch, initialFilms]);

  return (
    <>
      <Header/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList films={filmsToShow}/>
          <ShowMoreButton showedFilmsCount={showedFilmsCount} filmsCount={filmsCount} />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
