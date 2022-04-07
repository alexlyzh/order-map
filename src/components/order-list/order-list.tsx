import './order-list.css';
import SeparatorControl from './separator-control/separator-control';
import { useRef } from 'react';
import { useSeparator } from '../../hooks/use-separator';

function OrderList(): JSX.Element {
  const listRef = useRef<HTMLElement | null>(null);
  const { handleMouseDown, handleMouseUp } = useSeparator(listRef);

  return (
    <section className="order-list" ref={listRef}>
      <SeparatorControl
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </section>
  );
}

export default OrderList;
