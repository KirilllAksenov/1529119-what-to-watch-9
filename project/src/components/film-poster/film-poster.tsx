import { Link } from 'react-router-dom';

type FilmPosterProps = {
  filmTitle: string,
  filmGenre: string,
  releaseDate: number,
}

function FilmPoster({filmTitle, filmGenre, releaseDate}: FilmPosterProps): JSX.Element {
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>

      <div className="film-card__desc">
        <h2 className="film-card__title">{filmTitle}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{filmGenre}</span>
          <span className="film-card__year">{releaseDate}</span>
        </p>

        <div className="film-card__buttons">
          <Link to="/player/:id">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          </Link>
          <Link to="/mylist">
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilmPoster;


