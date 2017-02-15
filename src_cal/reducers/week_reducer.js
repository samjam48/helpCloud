import { THIS_WEEK, CHANGE_WEEK } from '../actions/index';

export default function(state=[], action){
    switch (action.type) {
        case THIS_WEEK:
            return action.payload; 
        case CHANGE_WEEK:
            return action.payload; 
    }
    return state;
}
