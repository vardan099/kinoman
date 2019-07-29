import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import Header from './Header';
import SharedLink from "../SharedLink/SharedLink"

describe('Header Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                activeSection:'home',
                homeCallBack: jest.fn(),
                favoritesCallback:jest.fn(),
                watchLaterCallback: jest.fn()
            };
            const propsError = checkProps(Header, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        let handleHomeCallBack;
        beforeEach(() => {
            handleHomeCallBack = jest.fn();
            const props = {
                activeSection:'home',
                homeCallBack: ()=>{},
                favoritesCallback: ()=>{},
                watchLaterCallback: ()=>{}
            };
            wrapper = shallow(<Header {...props} />);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'headerComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a Logo', () => {
            const title = findByTestAtrr(wrapper, 'headerLogo');
            expect(title.length).toBe(1);
        });

        it('Should render 3 SharedLinks', () => {
            const desc = wrapper.find(SharedLink);
            expect(desc.length).toBe(3);
        });


    });


});