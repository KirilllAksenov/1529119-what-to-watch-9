import {SyntheticEvent, useCallback} from 'react';
import {Film} from '../../types/film';
import {playFilmVideoAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type Props = {
  film?: Film;
};


export function PlayButton({ film }: Props) {
  const dispatch = useAppDispatch();

  const handleClickPlayButton = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      dispatch(playFilmVideoAction(film.id));
    }
  },[film, dispatch]);

  if(!film) {
    return <div>Loading</div>;
  }

  return (
    <button onClick={handleClickPlayButton} type="button" className="btn btn--play film-card__button">
      <svg viewBox="0 0 19 20" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
}
