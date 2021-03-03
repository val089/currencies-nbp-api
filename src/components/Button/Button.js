import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ onClick, icon }) => {
	return (
		<button className="button" onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default Button;
