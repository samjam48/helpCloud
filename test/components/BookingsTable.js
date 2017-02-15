
import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import { BookingsTable } from '../../src/components/bookingsTable';

describe('BookingsTable component', () => {

    describe('render()', () => {
        it('should render the progress bar', () => {
            const props = {
                page: 1,
                bookings: [],
                dispatch: () => {}
            };
            const wrapper = shallow(<BookingsTable {...props} />);
            assert.equal((wrapper.find('ProgressBar').length), '1');
        });

        it('should render the bookings table', () => {
            const props = {
                page: 1,
                bookings: [{
                    id: 1,
                    client: 'SushiMe1',
                    jobRef: 'JR1'
                }]
            };
            const wrapper = shallow(<BookingsTable {...props} />);
            assert.equal((wrapper.find('Pagination').length), '1');
            assert.equal((wrapper.find('Table').length), '1');
        });
    });

});