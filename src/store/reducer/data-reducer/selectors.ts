import { createSelector } from '@reduxjs/toolkit';
import { State } from '../index';

export const getCurrentOrderName = ({data: {currentOrderName}}: State) => currentOrderName;
export const getOrders = ({data: {orders}}: State) => orders;
export const getLocations = ({data: {locations}}: State) => locations;

export const getWaypoints = createSelector(
  [getCurrentOrderName, getOrders, getLocations],
  (currentOrderName, orders, locations) => {
    const currentOrder = orders.find(({name}) => name === currentOrderName)!;

    const waypoint = locations.reduce((acc, {name, latitude, longitude}) => {
        if (name === currentOrder.source) {
          acc.sourceLatLng = [latitude, longitude];
        }
        if (name === currentOrder.destination) {
          acc.destinationLatLng = [latitude, longitude];
        }
        return acc;
    }, {} as { sourceLatLng: number[], destinationLatLng: number[]});

    return [waypoint.sourceLatLng, waypoint.destinationLatLng] as number[][];
  }
);
