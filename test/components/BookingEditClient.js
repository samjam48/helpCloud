import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import BookingEditClient from '../../src/components/BookingEditClient';

describe('BookingsEditClient component', () => {

    describe('render()', () => {
        it('should render the component in initial state', () => {
            const props = {
                meta: {
                    touched: false,
                },
                input: {},  
            };
            const wrapper = shallow(<BookingEditClient {...props} />);
            assert.equal((wrapper.find('FormGroup').length), '1');
            assert.equal((wrapper.find('FormGroup').prop('validationState')), null);
            assert.equal((wrapper.find('HelpBlock').children().length), 0);
        });
    });

    describe('render()', () => {
        it('should render the component in error state', () => {
            const props = {
                meta: {
                    touched: true,
                    error: 'Required'
                },
                input: {},  
            };
            const wrapper = shallow(<BookingEditClient {...props} />);
            assert.equal((wrapper.find('FormGroup').length), '1');
            assert.equal((wrapper.find('FormGroup').prop('validationState')), 'error');
            assert.equal((wrapper.find('HelpBlock').children().text()), 'Required');
        });
    });

    describe('render()', () => {
        it('should render the component in success state', () => {
            const props = {
                meta: {
                    touched: true,
                },
                input: {},  
            };
            const wrapper = shallow(<BookingEditClient {...props} />);
            assert.equal((wrapper.find('FormGroup').length), '1');
            assert.equal((wrapper.find('FormGroup').prop('validationState')), 'success');
            assert.equal((wrapper.find('HelpBlock').children().length), 0);
        });
    });
});