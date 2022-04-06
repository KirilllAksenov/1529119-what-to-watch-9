import { memo, SyntheticEvent } from 'react';
import { filmCardButtonsControl } from '../../const';
import ControlButton from '../control-button/control-button';

type Props = {
  onClick?: (evt: SyntheticEvent) => void;
  xlinkHref: string;
}
function FilmCardButtonMyList({onClick, xlinkHref}: Props): JSX.Element  {
  const {width, height, description, className} = filmCardButtonsControl.MyList;

  return (
    <ControlButton onClick={onClick} className={className} description={description} height={height} width={width} xlinkHref={xlinkHref} />
  );
}

export default memo(FilmCardButtonMyList);
