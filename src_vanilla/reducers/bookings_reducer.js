

// NOT IMPLEMENTED YET // IGNORE

import { BOOKINGS_MODAL_STATUS_SHOW, CHANGE_STATUS, TEXT_CHANGE } from '../actions/index'


export default function(state=[], action){
    const new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case BOOKINGS_MODAL_STATUS_SHOW:
            // console.log(action.payload)
            return [ ...action.payload.data]; 
        case CHANGE_STATUS:
            // console.log('action.payload')
            // console.log(action.payload)
            for(const i in new_state){
                if(new_state[i].id == action.payload.id) new_state[i].status = action.payload.status
                // console.log('change status state')
                // console.log(new_state[i])
                return new_state;
            }
        case TEXT_CHANGE:
            // console.log('action.payload')
            // console.log(action.payload)
            let field = action.payload.field
            for(const i in new_state){
                if(new_state[i].id == action.payload.id) new_state[i][action.payload.field] = action.payload.text
                // console.log('change text state')
                // console.log(new_state[i])
                return new_state;
            }
    }
    console.log('new state after bookings reducer ')
    console.log(state)
    
    return state;
}
