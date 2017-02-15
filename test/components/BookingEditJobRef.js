import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import BookingEditJobRef from '../../src/components/BookingEditJobRef';

describe('BookingsEditJobRef component', () => {

    describe('render()', () => {
        it('should render the component', () => {
            const props = {
                meta: {
                    touched: false,
                },
                input: {},  
            };
            const wrapper = shallow(<BookingEditJobRef {...props} />);
            assert.equal((wrapper.find('FormGroup').length), '1');
            assert.equal((wrapper.find('Glyphicon').length), 1);
        });
    });
});
