import './order-list.css';
import 'antd/dist/antd.css'
import SeparatorControl from './separator-control/separator-control';
import { Select } from 'antd';
import { useRef } from 'react';
import { useSeparator } from '../../hooks/use-separator';
import { orders, locations } from '../../mock/mock-data';

function OrderList(): JSX.Element {
  const listRef = useRef<HTMLElement | null>(null);
  const { handleMouseDown, handleMouseUp } = useSeparator(listRef);

  return (
    <section className="order-list" ref={listRef}>
      <h1 className="order-list__heading">Orders</h1>
      <ul className="order-list__items">
        {orders.map((order) => (
          <li className="order-list__item" key={order.name}>
            <span className="order-list__text">{order.name}</span>
            <Select placeholder={'Select source'}>
              {locations.map(({name}, index) => (
                <Select.Option key={`${name}-${index}-source`} value={name} >
                  {name}
                </Select.Option>
              ))}
            </Select>
            <Select placeholder={'Select destination'}>
              {locations.map(({name}, index) => (
                <Select.Option key={`${name}-${index}-destination`} value={name} >
                  {name}
                </Select.Option>
              ))}
            </Select>
          </li>
        ))}
      </ul>
      <SeparatorControl onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
    </section>
  );
}

export default OrderList;
