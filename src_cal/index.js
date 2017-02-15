import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise      from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { fetchData, thisWeek } from './actions/index';


    // 'Loading' text shown in as initial default state in case API call takes times
  var defaultState = { week: 'Loading...', data: [
    {
        "id": 1,
        "start": "2016-12-07T03:00:00Z",
        "end": "2016-12-07T06:30:00Z",
        "label": "Loading",
        "category": "cyan"
    },
    {
        "id": 2,
        "start": "2016-12-08T03:00:00Z",
        "end": "2016-12-08T04:00:00Z",
        "label": "Loading",
        "category": "cyan"
    },
    {
        "id": 3,
        "start": "2016-12-08T05:00:00Z",
        "end": "2016-12-08T06:30:00Z",
        "label": "Loading",
        "category": "cyan"
    },
    {
        "id": 4,
        "start": "2016-12-09T03:00:00Z",
        "end": "2016-12-09T06:30:00Z",
        "label": "Loading",
        "category": "cyan"
    }
]}




const createStoreWithMiddleware = applyMiddleware( promise )(createStore);

const store = createStoreWithMiddleware(reducers, defaultState)

store.dispatch( thisWeek() )
store.dispatch( fetchData() )

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider >,
document.getElementById('app'))



