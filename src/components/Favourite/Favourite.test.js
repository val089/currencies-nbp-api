import React from 'react';
import renderer from 'react-test-renderer';
import Favourite from './Favourite';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

it('renders ok', () => {
	const tree = renderer.create(<Favourite icon={faTrashAlt} />).toJSON();
	expect(tree).toMatchSnapshot();
});
