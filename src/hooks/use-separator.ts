import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export const useSeparator = (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  const dragging = useRef<boolean>(false);

  const handleMouseMove = useCallback((evt: MouseEvent) => {
    if (dragging.current && ref.current) {
      ref.current.style.width = `${Math.min(evt.clientX, 700)}px`;
    }
  }, [ref, dragging]);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = useCallback(() => {
    dragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  useEffect(() => () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousedown', handleMouseDown);
  });

  return {handleMouseDown, handleMouseUp, handleMouseMove};
};
