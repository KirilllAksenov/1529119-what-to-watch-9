import { memo, ReactNode, SyntheticEvent, useCallback } from 'react';
import {useNavigate } from 'react-router-dom';
import FilmCardButtonMyList from './film-card-button-my-list';
import FilmCardButtonPlay from './film-card-button-play';
import { useAppDispatch} from '../../hooks';
import { changeStatusToView } from '../../store/api-actions';
import { Film } from '../../types/film';

type Props = {
  film: Film;
  children?: ReactNode;
}
function FilmButtonsControl({film, children}: Props): JSX.Element | null {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
  }, [film, dispatch]);

  if(!film) {
    return <div>Loading</div>;
  }

  return (
    <div className="film-card__buttons">
      <FilmCardButtonPlay onClick={handleClickPlayButton} />
      <FilmCardButtonMyList onClick={handleClickMyListButton} xlinkHref={film.isFavorite ? '#in-list' : '#add'}/>
      {children}
    </div>
  );
}

export default memo(FilmButtonsControl);
