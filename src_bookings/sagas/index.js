import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { bookingsFetchList, bookingsAdd, bookingsEdit, bookingsDelete } from './bookings';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'bookingsFetchList', bookingsFetchList),
    fork(takeLatest, 'bookingsAdd', bookingsFetchList),
    fork(takeLatest, 'bookingsEdit', bookingsFetchList),
    fork(takeLatest, 'bookingsDelete', bookingsFetchList)
  ];
}
