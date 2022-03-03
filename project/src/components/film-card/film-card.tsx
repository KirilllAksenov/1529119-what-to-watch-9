import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

const DEFAULT_MUTE = true;

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
}

function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {
  const [isPlay, setIsPlay] = useState(false);

  let currentPlay = true;

  const toggleIsPlay = (data: number | null) => {
    setIsPlay(currentPlay);
    onHover(data);
  };

  const onMouseEnterHandler = (data: number | null) => {
    toggleIsPlay(data);
    currentPlay = true;
  };

  const onMouseLeaveHandler = (data: number | null) => {
    currentPlay = false;
    toggleIsPlay(data);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setTimeout(() => onMouseEnterHandler(film.id), 1000)}
      onMouseLeave={() => onMouseLeaveHandler(null)}
    >
      <div className="small-film-card__image">
        {isPlay
          ? <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} isPlay={isPlay} isMute={DEFAULT_MUTE}/>
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/film/:${film.id}`}className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
