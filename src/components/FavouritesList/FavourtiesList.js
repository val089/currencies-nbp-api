import React from 'react';
import Favourite from '../Favourite';
import { v4 as uuidv4 } from 'uuid';
import '../CurrenciesList/CurrenciesList.scss';

const FavouritesList = ({ data }) => {
	return (
		<table className="table">
			<thead className="table__thead">
				<tr className="table__thead-tr">
					<th className="table__thead-th">CODE</th>
					<th className="table__thead-th">CURRENCY</th>
					<th className="table__thead-th">MID</th>
				</tr>
			</thead>
			<tbody className="table__tbody">
				{data.map((currency) => (
					<Favourite key={uuidv4()} data={currency} />
				))}
			</tbody>
		</table>
	);
};

export default FavouritesList;
