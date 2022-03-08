import { useState } from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
const FILMS_MAX_COUNT = 4;
type FilmsListProps = {
  films: Film[];
  genre?: string;
  id?: number;
}

function FilmsList({films, genre, id}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  if (genre) {
    films = films.filter((film) => film.genre === genre && film.id !== id).slice(0, FILMS_MAX_COUNT);
  }

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isActive={film.id === activeFilmId}
          onHover={setActiveFilmId}
        />
      ))}
    </div>
  );
}

export default FilmsList;
