import './order-list.css';
import 'antd/dist/antd.css';
import SeparatorControl from './separator-control/separator-control';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSeparator } from '../../hooks/use-separator';
import { getCurrentOrderName, getOrders } from '../../store/reducer/data-reducer/selectors';
import { dataAction, WaypointAction } from '../../store/reducer/data-reducer/data-reducer';
import { Dispatch } from '@reduxjs/toolkit';
import { Waypoint } from '../../types/types';
import Waypoints from './waypoints/waypoints';

const handleWaypointChange = (
  dispatch: Dispatch<WaypointAction>,
  waypointType: Waypoint,
  orderName: string,
  locationName: string,
) => dispatch(dataAction.changeWaypoint({ orderName, locationName, waypointType }));

function OrderList(): JSX.Element {
  const dispatch = useDispatch();
  const currentOrderName = useSelector(getCurrentOrderName);
  const orders = useSelector(getOrders);
  const listRef = useRef<HTMLElement | null>(null);
  const { handleMouseDown, handleMouseUp } = useSeparator(listRef);

  return (
    <section className="order-list" ref={listRef}>
      <h1 className="order-list__heading">Orders</h1>
      <ul className="order-list__items">
        {orders.map(({name, source, destination}) => {
          const handleCurrentOrderNameChange = () => dispatch(dataAction.setCurrentOrderName(name));

          const handleSourceChange = (value: string, ..._rest: unknown[]) => {
            handleWaypointChange(dispatch, Waypoint.source, name, value);
          };

          const handleDestinationChange = (value: string, ..._rest: unknown[]) => {
            handleWaypointChange(dispatch, Waypoint.destination, name, value);
          };

          return (
            <li
              className={`order-list__item ${currentOrderName === name ? 'order-list__item--active' : ''}`}
              key={name}
              onClick={handleCurrentOrderNameChange}
            >
              <span className="text">{name}</span>
              <Waypoints
                name={name}
                currentOrderName={currentOrderName}
                source={source}
                destination={destination}
                onSourceChange={handleSourceChange}
                onDestinationChange={handleDestinationChange}
              />
            </li>
          );
        })}
      </ul>
      <SeparatorControl onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
    </section>
  );
}

export default OrderList;
