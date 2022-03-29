import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Login from '../../components/login/login';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';


function MyListScreen (): JSX.Element{
  const {data} = useAppSelector((state) => state.films);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <Login/>
        </ul>
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
