import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                inputValue:'',
                inputChangeCallback: jest.fn(),
                submitCallback:jest.fn(),
            };
            const propsError = checkProps(SearchInput, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                inputValue:'',
                inputChangeCallback: jest.fn(),
                submitCallback:jest.fn(),
            };
            wrapper = shallow(<SearchInput {...props} />);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'searchComponent');
            expect(component.length).toBe(1);
        });

    });


});