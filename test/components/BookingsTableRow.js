
import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import { BookingsTableRow } from '../../src/components/bookingsTableRow';

describe('BookingsTableRow component', () => {

    describe('render()', () => {
        it('should render the bookings table row component', () => {
            const props = {
                booking: [{
                    id: 1,
                    client: 'SushiMe1',
                    jobRef: 'JR1'
                }]
            };
            const wrapper = shallow(<BookingsTableRow {...props} />);
            assert.equal((wrapper.find('td').length), '5');
            assert.equal((wrapper.find('Button').length), '2');
        });
    });

});