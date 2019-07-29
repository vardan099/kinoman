import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import ModalWrapper from './ModalWrapper';
import ReactModal from "react-modal";

describe('ModalWrapper Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                isOpen: jest.bool,
                closeCallback: jest.fn(),
                videoKey: jest.string,
            };
            const propsError = checkProps(ModalWrapper, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                isOpen: jest.bool,
                closeCallback: jest.fn(),
                videoKey: jest.string,
            };
            wrapper = shallow(<ModalWrapper {...props} />);
        });

        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'modalWrapperComponent');
            expect(component.length).toBe(1);
        });

        it('Should render ReactModal', () => {
            const desc = wrapper.find(ReactModal);
            expect(desc.length).toBe(1);
        });


    });


});