import { SyntheticEvent } from 'react';

type Props = {
  width: number;
  height: number;
  xlinkHref: string;
  description: string;
  className: string;
  onClick?: (evt: SyntheticEvent) => void;
}

function ControlButton({width, height, xlinkHref, description, className, onClick}: Props): JSX.Element  {
  return (
    <button onClick={onClick} type="button" className={className}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{description}</span>
    </button>
  );
}

export default ControlButton;
