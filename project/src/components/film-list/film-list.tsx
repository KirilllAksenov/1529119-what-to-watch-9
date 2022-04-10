import { memo, useState } from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {
  const [, setActiveFilmId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onHover={setActiveFilmId}
        />
      ))}
    </div>
  );
}

export default memo(FilmsList);
