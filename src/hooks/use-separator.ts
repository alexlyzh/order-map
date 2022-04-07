import { useCallback, MutableRefObject, useEffect, useRef } from 'react';

export const useSeparator = (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  const dragging = useRef<boolean>(false);

  const handleMouseMove = useCallback((evt: MouseEvent) => {
    if (dragging.current && ref.current) {
      ref.current.style.width = `${evt.clientX}px`;
    }
  }, [ref]);

  const handleMouseDown = useCallback(() => {
    dragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  useEffect(() => () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousedown', handleMouseDown);
  });

  return { handleMouseDown, handleMouseUp, handleMouseMove };
};
