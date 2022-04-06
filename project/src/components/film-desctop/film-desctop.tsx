import { Film } from '../../types/film';
import FilmButtonsControl from '../film-card-buttons/film-card-buttons';

type Props = {
  film: Film;
}
function FilmDesctop({film}: Props): JSX.Element {

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>
      <FilmButtonsControl film={film} />
    </div>
  );
}

export default FilmDesctop;
