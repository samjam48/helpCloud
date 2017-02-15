import { reducerCall } from './index'

export default function bookings(state = {}, action) {
    return reducerCall(state, action, reducerClass)
}

class reducerClass{
    static modalDeleteShow(new_state, action){
        new_state.modal = new_state.modal ? new_state.modal : {};
        new_state.modal.list_delete = {
            show: true,
            id: action.id,
            client: action.client
        }
        return new_state;
    }
    static modalDeleteHide(new_state, action){
        new_state.modal.list_delete = {
            show: false,
            id: 0,
            client: ''
        }
        return new_state;
    }
    static bookingDelete(new_state, action){
        for (const i in new_state.list) {
            if (new_state.list[i].id === action.id){
                new_state.list.splice(i, 1);
                break
            }
        }
        return new_state;
    }
    static add(new_state, action) {
        const id = action.id ? action.id : Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
        new_state.list.push({
            id: id,
            client: action.client,
            jobRef: action.jobRef
        })
        return new_state
    }
    static edit(new_state, action) {
        for (const booking of new_state.list){
            if (booking.id === action.id){
                Object.assign(booking, {
                    client: action.client,
                    jobRef: action.jobRef
                })
            }
        };
        return new_state
    }
    static fetchListSuccess(new_state, action) {
        new_state.list = action.bookings;
        return new_state
    }


}


    // let new_state;
    // switch(action.type){
    //     case 'bookings.modalDeleteShow':
    //         new_state = JSON.parse(JSON.stringify(state));
    //         new_state.modal = new_state.modal ? new_state.modal : {};
    //         new_state.modal.list_delete = {
    //             show: true,
    //             id: action.id,
    //             client: action.client
    //         }
    //         return new_state;
    //     case 'bookings.modalDeleteHide':
    //         new_state = JSON.parse(JSON.stringify(state));
    //         new_state.modal.list_delete = {
    //             show: false,
    //             id: 0,
    //             client: ''
    //         }
    //         return new_state;
    //     case 'bookings.bookingDelete':
    //         new_state = JSON.parse(JSON.stringify(state));
    //         for (const i in new_state.list) {
    //             if (new_state.list[i].id === action.id){
    //                 new_state.list.splice(i, 1);
    //                 break
    //             }
    //         }
    //         return new_state;
    //     default:
    //         //no action passed so show default state
    //         return state;
    // }