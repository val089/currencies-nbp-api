import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders ok', () => {
	const tree = renderer.create(<Button className="button" />).toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Button component', () => {
	it('should renders ok', () => {
		const wrapper = shallow(<Button />);
		const button = wrapper.find('button');
		expect(button.text()).toBe('<FontAwesomeIcon />');
	});
});
