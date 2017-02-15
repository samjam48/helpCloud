import assert from 'assert';

import bookings from '../../src/reducers/bookings';

describe('Bookings reducer', () => {
    describe('add()', () => {
        it('should return a new booking array element', () => {
            const state = {
                list:[
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    }
                ]
            };
            const action = {
                type: 'bookings.add',
                id: 2,
                client: 'Other name',
                jobRef: 'Other job'
            }
            const expected = {
                list: [
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    },
                    {
                        id: 2,
                        client: 'Other name',
                        jobRef: 'Other job'
                    }
                ]
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('edit()', () => {
        it('should return an edited booking array element', () => {
            const state = {
                list:[
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    },
                    {
                        id: 2,
                        client: 'Other name',
                        jobRef: 'Other job'
                    }
                ]
            };
            const action = {
                type: 'bookings.edit',
                id: 2,
                client: 'Changed name',
                jobRef: 'Changed job'
            }
            const expected = {
                list: [
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    },
                    {
                        id: 2,
                        client: 'Changed name',
                        jobRef: 'Changed job'
                    }
                ]
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('bookingDelete()', () => {
        it('should return an edited booking array element', () => {
            const state = {
                list:[
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    },
                    {
                        id: 2,
                        client: 'Other name',
                        jobRef: 'Other job'
                    }
                ]
            };
            const action = {
                type: 'bookings.bookingDelete',
                id: 2
            }
            const expected = {
                list: [
                    {
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    }
                ]
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('fetchListSuccess()', () => {
        it('should return a list of bookings', () => {
            const state = {};
            const action = {
                type: 'bookings.fetchListSuccess',
                bookings:[{
                    id: 1,
                    client: 'some name',
                    jobRef: 'some job'
                }]
            }
            const expected = {
                list: [{
                        id: 1,
                        client: 'some name',
                        jobRef: 'some job'
                    }]
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('modalDeleteShow()', () => {
        it('should set the list_delete data when it is undefined', () => {
            const state = {};
            const action = {
                type: 'bookings.modalDeleteShow',
                id: 2,
                client: 'SushiMe2'
            }
            const expected = {
                modal: {
                    list_delete: {
                        show: true,
                        id: 2,
                        client: 'SushiMe2'
                    }
                }
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('modalDeleteShow()', () => {
        it('should set the list_delete data when it exists', () => {
            const state = {
                modal: {
                    list_delete: {
                        show: false,
                        id: 0,
                        client: ''
                    }
                }
            };
            const action = {
                type: 'bookings.modalDeleteShow',
                id: 2,
                client: 'SushiMe2'
            }
            const expected = {
                modal: {
                    list_delete: {
                        show: true,
                        id: 2,
                        client: 'SushiMe2'
                    }
                }
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })

    describe('modalDeleteHide()', () => {
        it('should set the list_delete data', () => {
            const state = {
                modal: {
                    list_delete: {
                        show: false,
                        id: 2,
                        client: 'SushiMe2'
                    }
                }
            };
            const action = {
                type: 'bookings.modalDeleteHide'
            }
            const expected = {
                modal: {
                    list_delete: {
                        show: false,
                        id: 0,
                        client: ''
                    }
                }
            };
            assert.deepEqual(bookings(state, action), expected);
        });
    })
})