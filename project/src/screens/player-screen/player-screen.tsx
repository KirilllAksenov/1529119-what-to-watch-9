import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilm, getLoadedFilmsStatus } from '../../store/app-data/app-data';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import VideoPlayer from '../../components/video-player/video-player';
import PlayerButtonPlay from '../../components/player-button-play/player-button-play';
import PlayerButtonFullScreen from '../../components/player-button-full-screen/player-button-full-screen';
import PlayerButtonPause from '../../components/player-button-pause/player-button-pause';
import { useCallback, useState } from 'react';
import LoaderScreen from '../loader-screen/loader-screen';

function PlayerScreen(): JSX.Element{
  const [isPlay, setIsPlay] = useState(true);
  const film = useAppSelector(getFilm);
  const navigate = useNavigate();
  const isFilmLoaded = useAppSelector(getLoadedFilmsStatus);
  const handleClickExitButton = useCallback(() => {
    navigate(-1);
  },[navigate]);

  const handleClickPlayButton = useCallback(() => {
    setIsPlay(false);
  },[setIsPlay]);

  const handleClickPauseButton = useCallback(() => {
    setIsPlay(true);
  },[setIsPlay]);

  if(!film) {
    return <NotFoundScreen/>;
  }

  if (!isFilmLoaded) {
    return <LoaderScreen />;
  }

  const {videoLink, previewVideoLink, runTime} = film;

  return (
    <div className="player">
      <VideoPlayer src={videoLink} poster={previewVideoLink} isMute={false} isPlay={isPlay}/>
      <button onClick={handleClickExitButton} type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className='player__progress' value='30' max='100'/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{dayjs.duration(runTime, 'minutes').format(`${runTime > 60 ? 'H[:]m[:]ss' : 'm'}`)}</div>
        </div>
        <div className="player__controls-row">
          {isPlay
            ? <PlayerButtonPlay onClick={handleClickPlayButton}/>
            : <PlayerButtonPause onClick={handleClickPauseButton}/>}
          <div className="player__name">Transpotting</div>
          <PlayerButtonFullScreen />
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
