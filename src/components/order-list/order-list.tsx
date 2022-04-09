import './order-list.css';
import 'antd/dist/antd.css'
import SeparatorControl from './separator-control/separator-control';
import { Select } from 'antd';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSeparator } from '../../hooks/use-separator';
import { getCurrentOrderName } from '../../store/reducer/data-reducer/selectors';
import { locations, orders } from '../../const';
import { dataAction, WaypointAction } from '../../store/reducer/data-reducer/data-reducer';
import { Dispatch } from '@reduxjs/toolkit';
import { Waypoint } from '../../types/types';

const handleWaypointChange = (
  dispatch: Dispatch<WaypointAction>,
  waypointType: Waypoint,
  orderName: string,
  locationName: string,
) => dispatch(dataAction.changeWaypoint({ orderName, locationName, waypointType }));

function OrderList(): JSX.Element {
  const dispatch = useDispatch();
  const currentOrderName = useSelector(getCurrentOrderName);
  const listRef = useRef<HTMLElement | null>(null);
  const { handleMouseDown, handleMouseUp } = useSeparator(listRef);

  return (
    <section className="order-list" ref={listRef}>
      <h1 className="order-list__heading">Orders</h1>
      <ul className="order-list__items">
        {orders.map(({name, source, destination}) => {
          const handleCurrentOrderNameChange = () => dispatch(dataAction.setCurrentOrderName(name));

          const handleSourceChange = (value: string, ..._rest: unknown[]) =>
            handleWaypointChange(dispatch, Waypoint.source, name, value);

          const handleDestinationChange = (value: string, ..._rest: unknown[]) =>
            handleWaypointChange(dispatch, Waypoint.destination, name, value);

          return (
            <li
              className={`order-list__item ${currentOrderName === name ? 'order-list__item--active' : ''}`}
              key={name}
              onClick={handleCurrentOrderNameChange}
            >
              <span className="order-list__text">{name}</span>
              <div className="order-list__waypoints">
                <div>
                  <p className="order-list__text--secondary">Source</p>
                  <Select
                    className="order-list__select"
                    placeholder={'Select source'}
                    defaultValue={source}
                    disabled={name !== currentOrderName}
                    onSelect={handleSourceChange}
                    onClick={(evt) => evt.stopPropagation()}
                  >
                    {locations.map(({name}, index) => (
                      <Select.Option key={`${name}-${index}-source`} value={name}>
                        {name}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <p className="order-list__text--secondary">Destination</p>
                  <Select
                    className="order-list__select"
                    placeholder={'Select destination'}
                    defaultValue={destination}
                    disabled={name !== currentOrderName}
                    onSelect={handleDestinationChange}
                    onClick={(evt) => evt.stopPropagation()}
                  >
                    {locations.map(({name}, index) => (
                      <Select.Option key={`${name}-${index}-destination`} value={name}>
                        {name}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <SeparatorControl onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
    </section>
  );
}

export default OrderList;
