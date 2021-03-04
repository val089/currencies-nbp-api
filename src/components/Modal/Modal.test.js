import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import { faCheckCircle, faBan } from '@fortawesome/free-solid-svg-icons';

describe('Icon Confirm in Modal component', () => {
	it('should Icon Confirm to be faCheckCircle in Modal component', () => {
		const wrapper = shallow(<Modal />);
		const confirmIcon = wrapper.find('.modal__icon--confirm');
		expect(confirmIcon.props().icon).toBe(faCheckCircle);
	});
});

describe('Icon Abort in Modal component', () => {
	it('should Icon Confirm to be faBan in Modal component', () => {
		const wrapper = shallow(<Modal />);
		const abortIcon = wrapper.find('.modal__icon--abort');
		expect(abortIcon.props().icon).toBe(faBan);
	});
});
