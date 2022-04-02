import React, { SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStatusToView } from '../../store/api-actions';
import { getFilm } from '../../store/server-process/server-process';
import { FilmStatus } from '../../types/film';

function Controls(): JSX.Element {
  const user = useAppSelector(({USER}) => USER);
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickPlayButton = (evt: SyntheticEvent) => {
    evt.preventDefault();

    navigate(`/player/${film.id}`);
  };

  const changeFilmStatus = (filmStatus: FilmStatus) => {
    dispatch(changeStatusToView(filmStatus));
  };

  const handleClickMyListButton = (evt: SyntheticEvent) => {
    evt.preventDefault();

    const status = film.isFavorite ? 0 : 1;

    changeFilmStatus({filmId: film.id, status: status});
  };

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
            <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
          </svg>
          <span>My list</span>
        </button>
      </Link>
      {user.authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${film.id}/review`}className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default Controls;
