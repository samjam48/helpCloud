import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import { BookingDelete } from '../../src/components/BookingDelete';

describe('BookingsDelete component', () => {

    describe('render()', () => {
        it('should render the component', () => {
            const props = {
                modal_delete: {
                    show: false,
                    id: 0,
                    client: ''
                }    
            };
            const wrapper = shallow(<BookingDelete {...props} />);
            assert.equal((wrapper.find('Modal').length), '1');
            assert.equal((wrapper.find('Button').length), '2');
        });
    });

});