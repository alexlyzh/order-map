import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import watcherSaga from './sagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
