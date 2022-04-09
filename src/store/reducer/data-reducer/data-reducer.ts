import { createSlice } from '@reduxjs/toolkit';
import { locations, orders } from '../../../const';
import { Location, Order, Waypoint } from '../../../types/types';

type DataState = {
  currentOrderName: string,
  orders: Order[],
  locations: Location[],
}

type BasicAction = { type: string }
type CustomAction<T> = BasicAction & T;
type WaypointAction = CustomAction<{payload: { orderName: string, waypointType: Waypoint, locationName: string }}>;

const initialState: Readonly<DataState> = {
  currentOrderName: orders[0].name,
  orders,
  locations,
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCurrentOrderName(state, {payload} : CustomAction<{payload: string}>) {
      state.currentOrderName = payload;
    },
    changeWaypoint({orders}, {payload}: WaypointAction) {
      const order = orders.find(({name}) => name === payload.orderName)!;
      if (payload.waypointType === Waypoint.source) {
        order.source = payload.locationName;
        return;
      }
      order.destination = payload.locationName;
    },
  },
});

const dataReducer = dataSlice.reducer;
const dataAction = dataSlice.actions;

export { dataAction, dataReducer };
export type { DataState, WaypointAction };
