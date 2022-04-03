import { memo, SyntheticEvent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStatusToView } from '../../store/api-actions';
import { getFilm } from '../../store/app-data/app-data';

function Controls(): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(({USER}) => USER);
  const film = useAppSelector(getFilm);
  // eslint-disable-next-line no-console
  console.log('film :>> ', film);
  const handleClickPlayButton = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      navigate(`/player/${film.id}`);
    }
  },[navigate, film]);

  const handleClickMyListButton = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      dispatch(changeStatusToView({filmId: film.id, status: film.isFavorite ? 0 : 1}));
    }
  },[dispatch, film]);

  if(!film) {
    return <div>Loading</div>;
  }

  const {id, isFavorite} = film;

  return (
    <div className="film-card__buttons">
      <Link to="/player/:id">
        <button onClick={handleClickPlayButton} className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      </Link>
      <Link to="/mylist">
        <button onClick={handleClickMyListButton} className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
          </svg>
          <span>My list</span>
        </button>
      </Link>
      {user.authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${id}/review`}className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default memo(Controls);
