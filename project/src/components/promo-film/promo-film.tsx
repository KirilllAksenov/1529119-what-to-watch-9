import {SyntheticEvent} from 'react';
import {changePromoFilmFavoriteStatus} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {PlayButton} from '../play-button/play-button';
import {MyList} from '../my-list/my-list';
import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {redirectToRoute} from '../../store/action';
import {getPromoFilm} from '../../store/app-data/app-data';
import Logo from '../logo/logo';
import Login from '../login/login';

function PromoFilm(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);

  const user = useAppSelector((state) => state[NameSpace.user]);

  const handleMyListButtonClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (user.authorizationStatus === AuthorizationStatus.Auth) {
      if (promoFilm) {
        dispatch(changePromoFilmFavoriteStatus({ filmId: promoFilm.id, status: promoFilm.isFavorite ? 0 : 1}));
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        {promoFilm && <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>}
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo/>
        <Login/>
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            {promoFilm && <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />}
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm ? promoFilm.name : 'Not Founded'}</h2>
            <p className="film-card__meta">
              {promoFilm && <span className="film-card__genre">{promoFilm.genre}</span>}
              {promoFilm && <span className="film-card__year">{promoFilm.released}</span>}
            </p>
            <div className="film-card__buttons">
              {promoFilm && <PlayButton film={promoFilm} />}
              {promoFilm && <MyList onClick={handleMyListButtonClick} film={promoFilm} />}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default PromoFilm;
