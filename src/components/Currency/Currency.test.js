import React from 'react';
import { shallow } from 'enzyme';
import Currency from './Currency';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import data from './Currency';

describe('Button component in Currency component', () => {
	it('should Button icon to be faHeart in Currency component', () => {
		const wrapper = shallow(<Currency data={data} />);
		const button = wrapper.find('.button');
		expect(button.props().icon).toBe(faHeart);
	});
});
