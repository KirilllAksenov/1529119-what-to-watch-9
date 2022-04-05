import { playerButtonsControl } from '../../const';
import ControlButton from '../control-button/control-button';

function PlayerButtonFullScreen(): JSX.Element  {
  const {width, height, xlinkHref, description, className} = playerButtonsControl.FullScreen;

  return (
    <ControlButton className={className} description={description} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}

export default PlayerButtonFullScreen;
