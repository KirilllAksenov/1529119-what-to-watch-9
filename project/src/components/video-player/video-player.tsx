import { useEffect, useRef } from 'react';

type Props = {
  poster: string;
  src: string;
  isMute: boolean;
  isPlay: boolean;
}

function VideoPlayer({poster, src, isMute, isPlay}: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.muted = true;
    }
  }, [isMute]);

  useEffect(() => {
    if (videoRef.current !== null) {
      if (isPlay) {
        videoRef.current.play();
      }
    }
  }, [isPlay]);

  return(
    <video src={src} className="player__video" poster={poster} ref={videoRef} />
  );
}

export default VideoPlayer;
