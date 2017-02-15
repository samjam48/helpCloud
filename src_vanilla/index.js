import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { demoBookings } from './api/demo_bookings';



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
        modal_status: {
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

const createStoreWithMiddleware = applyMiddleware( promise )(createStore);

const store = createStoreWithMiddleware(reducers, defaultState)


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider >,
document.getElementById('booking_sheet'))


// import { fetchData, thisWeek } from './actions/index';
// store.dispatch( thisWeek() )
// store.dispatch( fetchData() )

    // 'Loading' text shown in as initial default state in case API call takes times
    // var defaultState = { week: 'Loading...', bookings: demoBookings, modals: modalStates }
