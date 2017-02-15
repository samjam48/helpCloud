import { call, put } from 'redux-saga/effects';
import assert from 'assert';

import { bookingsFetchList, bookingsAdd, bookingsEdit, bookingsDelete } from '../../src/sagas/bookings';
import ApiBookings from '../../src/api/bookings';

describe('Bookings saga', () => {
    describe('bookingsFetchList()', () => {
        const generator = bookingsFetchList();
        it('should return the ApiBookings.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiBookings.getList));
        });
        it('should return the bookings.fetchListSuccess action', () => {
            assert.deepEqual(generator.next().value,
                put({type: 'bookings.fetchListSuccess', bookings: undefined}))
        });   
        it('should be finished', () => {
            assert.deepEqual(generator.next().done, true)
        });     
    });

    describe('bookingsAdd()', () => {
        const generator = bookingsFetchList();
        it('should return true', () => {
            // nothing to test
        });
    })
    describe('bookingsEdit()', () => {
        const generator = bookingsFetchList();
        it('should return true', () => {
            // nothing to test
        });
    })
    describe('bookingsDelete()', () => {
        const generator = bookingsFetchList();
        it('should return true', () => {
            // nothing to test
        });
    })
});
