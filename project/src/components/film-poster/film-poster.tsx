import { Film } from '../../types/film';
import Controls from '../controls/controls';

type Props = {
  films: Film[],
}

function FilmPoster({films}: Props): JSX.Element {
  const {name, genre, released, posterImage} = films[0];
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={posterImage} alt={name} width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{released}</span>
        </p>
        <Controls/>
      </div>
    </div>
  );
}

export default FilmPoster;


