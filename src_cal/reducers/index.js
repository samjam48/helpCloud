import { combineReducers } from 'redux';
import DataReducer from './data_reducer';
import WeekReducer from './week_reducer';

const rootReducer = combineReducers({
  data: DataReducer,
  week: WeekReducer
});

export default rootReducer;
