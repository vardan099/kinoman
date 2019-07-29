import HomePage from './HomePage';
import { shallow, mount } from 'enzyme';
import { findByTestAtrr, testStore } from './../../Utils';
import React from 'react';
import Header from "../Header/Header";
import {checkProps} from "../../Utils";

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<HomePage store={store} />).childAt(0).dive();
    return wrapper;
};

describe('HomePage Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            favorites: [],
            watchLater: [],
        };
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'homePageComponent');
        expect(component.length).toBe(1);
    });

    it('Should render Header Component', () => {
        const desc = wrapper.find(Header);
        expect(desc.length).toBe(1);
    });

    it('openModal Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.openModal();
        const newState = classInstance.state.isModalOpen;
        expect(newState).toBe(true);
    });
});

describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
        const expectedProps = {
            favorites: [],
            watchLater: [],
        };
        const propsError = checkProps(HomePage, expectedProps);
        expect(propsError).toBeUndefined();
    });

});