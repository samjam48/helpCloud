import { combineReducers } from 'redux';
// import DataReducer from './data_reducer';
// import WeekReducer from './week_reducer';
import BookingsReducer from './bookings_reducer';
import ModalsReducer from './modals_reducer';

const rootReducer = combineReducers({
  modals: ModalsReducer,
  bookings: BookingsReducer
});

export default rootReducer;
