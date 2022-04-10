import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/app-data/app-data';
import { getAuthorizationStatus } from '../../store/user-process/user-process';

function MyListScreen (): JSX.Element{
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  if (userAuthorizationStatus !== AuthorizationStatus.Auth) {
    navigate(AppRoute.Login);
  }

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <Login/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>
      <Footer/>
    </div>
  );
}

export default MyListScreen;
