import { memo, SyntheticEvent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FilmCardButtonMyList from './film-card-button-my-list';
import FilmCardButtonPlay from './film-card-button-play';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStatusToView } from '../../store/api-actions';
import { Film, FilmStatus } from '../../types/film';

type Props = {
  film: Film;
}
function FilmButtonsControl({film}: Props): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(({USER}) => USER);

  const handleClickPlayButton = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      navigate(`/player/${film.id}`);
    }
  },[navigate, film]);

  const changeFilmStatus = (filmStatus: FilmStatus) => {
    dispatch(changeStatusToView(filmStatus));
  };

  const handleClickMyListButton = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      changeFilmStatus({filmId: film.id, status: film.isFavorite ? 0 : 1});
    }
  };

  if(!film) {
    return <div>Loading</div>;
  }

  const {id, isFavorite} = film;

  return (
    <div className="film-card__buttons">
      <Link to="/player/:id">
        <FilmCardButtonPlay onClick={handleClickPlayButton} />
      </Link>
      <Link to="/mylist">
        <FilmCardButtonMyList onClick={handleClickMyListButton} xlinkHref={isFavorite ? '#in-list' : '#add'}/>
      </Link>
      {user.authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${id}/review`}className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default memo(FilmButtonsControl);
