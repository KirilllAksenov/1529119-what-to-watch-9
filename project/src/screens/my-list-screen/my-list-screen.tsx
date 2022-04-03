import { useNavigate } from 'react-router-dom';
import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Logotip from '../../components/logotip/logotip';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/app-data/app-data';
import { getAuthorizationStatus } from '../../store/user-process/user-process';


function MyListScreen (): JSX.Element{
  const navigate = useNavigate();
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  if (userAuthorizationStatus !== AuthorizationStatus.Auth) {
    navigate(AppRoute.Login);
  }

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotip/>
        <h1 className="page-title user-page__title">My list</h1>
        <Login/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {favoriteFilms.length > 0
          ? <FilmsList films={favoriteFilms} />
          : ''}
      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
