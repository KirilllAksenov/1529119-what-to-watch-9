import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
}

let timer: NodeJS.Timeout | null = null;

function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {
  const [isPlay, setIsPlay] = useState(false);

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      onHover(film.id);
      setIsPlay(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }
    setIsPlay(false);
    onHover(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        {isPlay
          ? <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} isPlay={isPlay} isMute/>
          : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/film/${film.id}`}className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
