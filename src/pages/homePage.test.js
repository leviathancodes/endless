import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homePage';

describe('Home', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    test('should render header', () => {
        expect(wrapper.find('#header')).toBeDefined();
    });
});