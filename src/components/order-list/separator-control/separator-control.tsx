import './separator-control.css'
import React, { MouseEvent } from 'react';

type Props = {
  onMouseDown: (evt: MouseEvent<HTMLSpanElement>) => void,
  onMouseUp: (evt: MouseEvent<HTMLSpanElement>) => void,
}

function SeparatorControl({onMouseDown, onMouseUp}: Props) {
  return (
    <span
      className="separator-control"
      draggable={false}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
    <svg width="17" height="7" viewBox="0 0 17 7">
      <g stroke="currentColor" fill="none" fillRule="evenodd">
        <path strokeLinecap="round" d="M3.482.6L.497 3.443l2.985 2.842M13.497.6l2.985 2.843-2.985 2.842"/>
        <path d="M15.5 3.5H1" strokeLinecap="square"/>
      </g>
    </svg>
  </span>
  );
}

export default SeparatorControl;
