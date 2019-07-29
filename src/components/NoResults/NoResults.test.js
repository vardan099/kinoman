import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import NoResults from './NoResults';
import Img from 'react-image';

describe('NoResults Component', () => {

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<NoResults />);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'noResultsComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a Img Component', () => {
            const desc = wrapper.find(Img);
            expect(desc.length).toBe(1);
        });

    });


});