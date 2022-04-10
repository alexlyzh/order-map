import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { dataAction } from '../reducer/data-reducer/data-reducer';
import { getLocations, getOrders } from '../../api';
import { Location, Order } from '../../types/types';

export function* handleLocationsLoading() {
  const locations: Location[] = yield call(getLocations);
  yield put(dataAction.setLocations(locations));
}

export function* handleOrdersLoading() {
  const orders: Order[] = yield call(getOrders);
  yield put(dataAction.setOrders(orders));
}

export function* handleAppInit() {
  yield fork(handleLocationsLoading);
  yield fork(handleOrdersLoading);
}

export default function* watcherSaga() {
  yield takeLatest(dataAction.initApp.type, handleAppInit);
}
