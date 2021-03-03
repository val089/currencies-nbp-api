import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Currency = ({ data, onClick }) => {
	return (
		<tr className="table__tr">
			<td className="table__td">{data.code}</td>
			<td className="table__td">{data.currency}</td>
			<td className="table__td table__td--flex">
				{data.mid}
				<Button icon={faHeart} onClick={() => onClick(data.code)} />
			</td>
		</tr>
	);
};

Currency.propTypes = {
	data: PropTypes.shape({
		code: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
		mid: PropTypes.number.isRequired,
	}),
};

export default Currency;
