import { memo, SyntheticEvent } from 'react';
import { filmCardButtonsControl } from '../../const';
import ControlButton from '../control-button/control-button';

type Props = {
  onClick?: (evt: SyntheticEvent) => void;
}

function FilmCardButtonPlay({onClick}: Props): JSX.Element  {
  const {width, height, xlinkHref, description, className} = filmCardButtonsControl.Play;

  return (
    <ControlButton onClick={onClick} className={className} description={description} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}

export default memo(FilmCardButtonPlay);
