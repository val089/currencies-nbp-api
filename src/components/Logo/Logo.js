import React from 'react';
import './Logo.scss';
import logo from '../../images/logo.png';

const Logo = () => {
	return (
		<div className="logo">
			<img className="logo__img" src={logo} alt="logo" />
			<h1 className="logo__text">Currencies</h1>
		</div>
	);
};

Logo.defaultProps = {
	text: 'Logo',
};

export default Logo;
