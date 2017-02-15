
import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';

import NotFound from '../../src/pages/NotFound';

describe('NotFound page', () => {

    describe('render()', () => {
        it('should render the component', () => {
            const wrapper = shallow(<NotFound/>);
            assert.equal((wrapper.find('h4').children().text()), 'Page not found')
        });
    });

});