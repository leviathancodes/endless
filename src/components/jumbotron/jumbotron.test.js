import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from './jumbotron';

describe('Jumbotron', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Jumbotron />);
    });

    test('should render the small title', () => {
        expect(wrapper.find('#jumbotron_title_small').text()).toBe('New Games & Acccessories');
    })

    test('should render the heading', () => {
        expect(wrapper.find('#jumbotron_title_01').text()).toBe('Monthly packages.');
        expect(wrapper.find('#jumbotron_title_02').text()).toBe('Excitement delivered daily.');
    });

    test('should render the Get Started button', () => {
        expect(wrapper.find('#getStartedButton')).toBeDefined();
    });
});