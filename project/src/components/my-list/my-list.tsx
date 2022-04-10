import {SyntheticEvent} from 'react';
import {Film} from '../../types/film';

type Props = {
  onClick?: (evt: SyntheticEvent) => void;
  film?: Film;
};

export function MyList({ onClick, film }: Props) {
  if(!film) {
    return <div>Loading</div>;
  }

  return (
    <button onClick={onClick} type="button" className="btn btn--list film-card__button">
      <svg viewBox="0 0 19 20" width={19} height={20} >
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}
