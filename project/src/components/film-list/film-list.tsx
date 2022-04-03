import { memo, useState } from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {
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
      ))}
    </div>
  );
}

export default memo(FilmsList);
