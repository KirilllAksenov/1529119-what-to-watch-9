import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type Props = {
  id: number;
}
function Controls({id}: Props): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  return (
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
      {authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${id}/review`}className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default React.memo(Controls);
