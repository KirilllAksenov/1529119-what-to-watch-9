import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Logotip from '../../components/logotip/logotip';
import { useAppSelector } from '../../hooks';


function MyListScreen (): JSX.Element{
  const {data} = useAppSelector((state) => state.films);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotip/>
        <h1 className="page-title user-page__title">My list</h1>
        <Login/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={data}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
