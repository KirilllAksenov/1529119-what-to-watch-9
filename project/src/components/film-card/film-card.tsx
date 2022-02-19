import { Link } from 'react-router-dom';

function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <Link to="/film/:id">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link to="/film/:id" className="small-film-card__link">Fantastic Beasts: The Crimes of Grindelwald</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
