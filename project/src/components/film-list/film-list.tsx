import { useState } from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

const MAX_FILMS_COUNT = 8;

type Props = {
  films: Film[];
  genre?: string;
  id?: number;
}

function FilmsList({films, genre, id}: Props): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isActive={film.id === activeFilmId}
          onHover={setActiveFilmId}
        />
      )).slice(0, MAX_FILMS_COUNT)}
    </div>
  );
}

export default FilmsList;
