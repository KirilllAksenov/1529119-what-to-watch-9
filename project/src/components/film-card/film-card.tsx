import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
}

function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(film.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="small-film-card__image">
        <Link to={`/film/${film.id}`}>
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/film/:${film.id}`}className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
