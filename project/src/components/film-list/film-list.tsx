import { memo} from 'react';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default memo(FilmsList);
