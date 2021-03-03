import React from 'react';
import { connect } from 'react-redux';
import '../Currencies/Currencies.scss';
import FavouritesList from '../../FavouritesList';

const Favourites = ({ favourites }) => {
	return (
		<section className="currencies">
			<FavouritesList data={favourites} />
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		favourites: state.currencies.favourites,
	};
};

export default connect(mapStateToProps)(Favourites);
