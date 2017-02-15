import { BOOKINGS_MODAL_STRIKES_SHOW } from '../actions/index';

// export default function bookings(state = {}, action) {
//     return reducerCall(state, action, reducerClass)
// }

export default function(state={}, action){
    console.log('action.type')
    console.log(action.type)
    switch (action.type) {
        case BOOKINGS_MODAL_STRIKES_SHOW:
            console.log('reducer payload')
            console.log(action.payload)
            console.log(action.payload.strikes)
            console.log(action.payload.booking_id)
            state.modals = state.modals ? state.modals : {};
            state.modals.strikes = action.payload
            return state; 
    }
    console.log('new state after modals reducer ')
    console.log(state)
    
    return state;
}

