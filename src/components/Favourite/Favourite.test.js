import React from 'react';
import { shallow } from 'enzyme';
import { Favourite } from './Favourite';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import data from './Favourite';

describe('Button component in Favourite component', () => {
	it('should Button icon to be faTrashAlt in Favourite component', () => {
		const wrapper = shallow(<Favourite data={data} />);
		const button = wrapper.find('.button');
		expect(button.props().icon).toBe(faTrashAlt);
	});
});
