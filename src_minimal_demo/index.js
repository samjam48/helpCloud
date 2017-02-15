// import "babel-polyfill";
// import { store } from "./store.js";
// import { router } from "./router.js";
import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";

import './stylesheets/main.scss'; 
import { reducers } from './reducers/index';

import App from './components/app';
import Home from './pages/Home';
import BookingEdit from './pages/BookingEdit';
import NotFound from './pages/NotFound';


let bookings = [];
for (let i=1; i<25; i++){
  bookings.push({
    id: i,
    client: 'client ' + i,
    jobRef: 'Job Ref ' + i
  });
}

const initial_state = { 
  bookings : {
    list: bookings
  }
}

let middleware= applyMiddleware(routerMiddleware(browserHistory));
// if (process.env.NODE_ENV !== 'production'){
//   middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
// }

const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store)

// render the main component
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path="booking-edit(/:id)" component={BookingEdit}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('booking_sheet')
);
