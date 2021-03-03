import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders ok', () => {
	const tree = renderer.create(<Button className="button" />).toJSON();
	expect(tree).toMatchSnapshot();
});
