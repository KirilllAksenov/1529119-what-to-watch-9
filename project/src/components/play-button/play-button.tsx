import {SyntheticEvent, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getFilm} from '../../store/app-data/app-data';

export function PlayButton() {
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);


  const handleClickPlayButton = useCallback((evt: SyntheticEvent) => {
    evt.preventDefault();
    if (film) {
      navigate(`/player/${film.id}`);
    }
  },[navigate, film]);

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
