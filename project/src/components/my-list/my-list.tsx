import {SyntheticEvent} from 'react';
import { AuthorizationStatus, NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import {Film} from '../../types/film';

type Props = {
  onClick?: (evt: SyntheticEvent) => void;
  film?: Film;
};

export function MyList({ onClick, film }: Props) {
  const user = useAppSelector((state) => state[NameSpace.user]);

  if(!film) {
    return <div>Loading</div>;
  }

  return (
    <button onClick={onClick} type="button" className="btn btn--list film-card__button">
      <svg viewBox="0 0 19 20" width={19} height={20} >
        {user.authorizationStatus === AuthorizationStatus.Auth && film.isFavorite === true ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
      </svg>
      <span>My list</span>
    </button>
  );
}
