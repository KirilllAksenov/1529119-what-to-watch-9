import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';

function MainScreen(): JSX.Element {
  const showedFilmsCount = useAppSelector((state) => state.showedFilmsCount);
  const films = useAppSelector((state) => state.films.data).slice(0, showedFilmsCount);

  return (
    <>
      <Header/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList films={films}/>
          <ShowMoreButton />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
