import { Promo } from '../../types/film';
import Controls from '../controls/controls';

type Props = {
  promo: Promo,
}

function FilmPoster({promo}: Props): JSX.Element {
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{promo.title}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{promo.genre}</span>
          <span className="film-card__year">{promo.releaseDate}</span>
        </p>
        <Controls/>
      </div>
    </div>
  );
}

export default FilmPoster;


