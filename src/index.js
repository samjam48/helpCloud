import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
// import { demoBookings } from './api/demo_bookings';
import { demoBookings } from './api/data';
import { fetchData } from './actions/index';
import Thunk        from 'redux-thunk'; 



var defaultState = {
    bookings: demoBookings,
    modals: {
        modal_request: {
            visibility: false,
            id: '',
            details: []
        },
        modal_charges: {
            visibility: false,
            id: '',
            details: []
        },
        modal_strikes: {
            visibility: false,
            id: '',
            details: []
        }
    }
}

const createStoreWithMiddleware = applyMiddleware( Thunk, promise )(createStore);

const store = createStoreWithMiddleware(reducers, defaultState)

store.dispatch( fetchData() )


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider >,
document.getElementById('booking_sheet'))


    // 'Loading' text shown in as initial default state in case API call takes times
    // var defaultState = { week: 'Loading...', bookings: demoBookings, modals: modalStates }
