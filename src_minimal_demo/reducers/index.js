import { combineReducers } from "redux";
import bookings from './bookings';
import { routerReducer } from "react-router-redux";
// import { reducer as formReducer } from "redux-form";


export const reducers= combineReducers({
  routing: routerReducer,
  bookings: bookings 
})

export function reducerCall(state, action, reducerClass){
    const[,method] = action.type.split('.');
    const methods = Object.getOwnPropertyNames(reducerClass).filter(name =>{
      if ('length' !== name && 'name' !== name && 'prototype' !== name){
        return name;
      }
    })
    
    if (methods.find(x => x === method)){   // check if action method exists
      //clone the state
      const new_state = JSON.parse(JSON.stringify(state));
      return reducerClass[method](new_state, action);
    }
    else {
      return state
    }
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object))
}
