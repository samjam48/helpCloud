import { call, put } from 'redux-saga/effects';

import ApiBookings from '../api/bookings';

export function* bookingsFetchList (action) {
    // call the api to get teh users
    const bookings = yield call(ApiBookings.getList);

    // dispatch the success action with the users attached
    yield put({
        type: 'bookings.fetchListSuccess',
        bookings
    })
}

export function* bookingsAdd(action){
    yield call(ApiBookings.add, action)
}
export function* bookingsEdit(action){
    yield call(ApiBookings.edit, action)
}
export function* bookingsDelete(action){
    yield call(ApiBookings.delete, action)
}