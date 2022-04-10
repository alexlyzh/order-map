import './separator-control.css';
import React, { MouseEvent } from 'react';

type Props = {
  onMouseDown: (evt: MouseEvent<HTMLSpanElement>) => void,
  onMouseUp: (evt: MouseEvent<HTMLSpanElement>) => void,
}

function SeparatorControl({onMouseDown, onMouseUp}: Props) {
  return (
    <div
      className="separator-control"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}

export default SeparatorControl;
