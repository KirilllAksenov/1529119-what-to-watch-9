import { Link } from 'react-router-dom';
import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import { useAppSelector } from '../../hooks';


function MyListScreen (): JSX.Element{
  const {data} = useAppSelector((state) => state.films);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
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
