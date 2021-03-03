import React from 'react';
import { mount } from 'enzyme';
import Favourite from './Favourite';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

describe('Button component in Favourite component', () => {
	it('should Button icon to be faTrashAlt in Favourite component', () => {
		const wrapper = mount(<Favourite />);
		const button = wrapper.find('button');
		expect(button.props().icon).to.equal(faTrashAlt);
	});
});
