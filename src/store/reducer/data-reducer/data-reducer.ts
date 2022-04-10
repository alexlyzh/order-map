import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';
import { Location, Order, Waypoint } from '../../../types/types';

type DataState = {
  currentOrderName: string,
  orders: Order[],
  locations: Location[],
}

type ActionWithPayload<T> = Action<string> & { payload: T };
type WaypointAction = ActionWithPayload<{ orderName: string, waypointType: Waypoint, locationName: string }>;
type SetOrdersAction = ActionWithPayload<Order[]>;
type SetLocationsAction = ActionWithPayload<Location[]>;

const initialState: Readonly<DataState> = {
  currentOrderName: '',
  orders: [],
  locations: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    initApp() {},
    setOrders(state, {payload}: SetOrdersAction) {
      state.orders = payload;
      state.currentOrderName = payload[0].name;
    },
    setLocations(state, {payload}: SetLocationsAction) {
      state.locations = payload;
    },
    setCurrentOrderName(state, {payload}: ActionWithPayload<string>) {
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
export type { DataState, WaypointAction, SetOrdersAction };
