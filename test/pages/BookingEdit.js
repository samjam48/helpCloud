import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import { BookingEdit }  from '../../src/pages/BookingEdit';

describe('BookingEdit page', () => {

    describe('render()', () => {
        it('should render the add booking form', () => {
            const props = {
                initialValues: {
                    id: 0,
                },
                handleSubmit: () => {},
                invalid: true,
                submitting: false,
            }
            const wrapper = shallow(<BookingEdit {...props} />);
            console.log(wrapper.find('PageHeader').children().text())
            console.log(wrapper.find('PageHeader').text())
            assert.equal(wrapper.find('PageHeader').children().text(), 'Add Booking')
            assert.equal(wrapper.find('Button').prop('disabled'), true)
        });

        it('should render the edit booking form', () => {
            const props = {
                initialValues: {
                    id: 1,
                },
                handleSubmit: () => {},
                invalid: false,
                submitting: false,
            }
            const wrapper = shallow(<BookingEdit {...props} />);
            assert.equal(wrapper.find('PageHeader').children().text(), 'Edit Booking')
            assert.equal(wrapper.find('Button').prop('disabled'), false)
        });

    });

});