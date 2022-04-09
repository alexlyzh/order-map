import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './data-reducer/data-reducer';

type State = ReturnType<typeof reducer>;

const reducer = combineReducers({
  data: dataReducer,
});

export default reducer;
export type { State };
