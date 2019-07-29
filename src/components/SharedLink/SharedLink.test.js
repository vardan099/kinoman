import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../Utils/index';
import SharedLink from './SharedLink';

describe('SharedLink Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                linkText: 'Example link Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedLink, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                isActive: false,
                linkText: 'Example link Text',
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedLink {...props} />);
        });

        it('Should Render a Link', () => {
            const link = findByTestAtrr(wrapper, 'linkComponent');
            expect(link.length).toBe(1);
        });

        it('Should emit callback on click event', () => {
            const link = findByTestAtrr(wrapper, 'linkComponent');
            link.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });


    });




});