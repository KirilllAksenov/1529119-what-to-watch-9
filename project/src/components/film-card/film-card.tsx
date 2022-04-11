import {useState, memo, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film,
}

let timer: NodeJS.Timeout | null = null;

function FilmCard({film}: Props): JSX.Element {
  const [isPlay, setIsPlay] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setIsPlay(true);
    }, 1000);
  };

  const handleClick = () => {
    navigate(`/films/${film.id}`);
  };

  const handleMouseLeave = () => {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }
    setIsPlay(false);
  };

  useEffect(() => () => {
    if (timer) {
      clearTimeout(timer);
    }
  }, []);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image" onClick={() => handleClick()}>
        {isPlay && <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} isPlay={isPlay} isMute/>}
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default memo(FilmCard);
