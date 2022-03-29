import { Film } from '../../types/film';
import Controls from '../controls/controls';

type Props = {
  films: Film[],
}

function FilmPoster({films}: Props): JSX.Element {
  //const {name, genre, released, posterImage} = films[0];
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src='' alt='' width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{}</span>
          <span className="film-card__year">{}</span>
        </p>
        <Controls/>
      </div>
    </div>
  );
}

export default FilmPoster;


