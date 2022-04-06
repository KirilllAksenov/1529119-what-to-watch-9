
import { memo } from 'react';
import { playerButtonsControl } from '../../const';
import ControlButton from '../control-button/control-button';

type Props = {
  onClick?: () => void;
}

function PlayerButtonPause({onClick}: Props): JSX.Element  {
  const {width, height, xlinkHref, description, className} = playerButtonsControl.Pause;

  return (
    <ControlButton onClick={onClick} className={className} description={description} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}

export default memo(PlayerButtonPause);
