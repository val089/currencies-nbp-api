import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, addToFavourites } from '../../../redux/redux';
import './Currencies.scss';
import CurrenciesList from '../../CurrenciesList';

const Currencies = (props) => {
	const {
		fetchCurrencies,
		currencies,
		isLoading,
		isError,
		addToFavourites,
	} = props;

	useEffect(() => {
		fetchCurrencies();
	}, [fetchCurrencies]);

	return (
		<section className="currencies">
			<CurrenciesList data={currencies} onClick={addToFavourites} />
			{isLoading && <p className="currencies__loading">Loading...</p>}
			{isError && (
				<p className="currencies__error">An error has occurred</p>
			)}
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		currencies: state.currencies.currencies,
		isLoading: state.currencies.isLoading,
		isError: state.currencies.isError,
	};
};

const mapDispatchToProps = {
	fetchCurrencies,
	addToFavourites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
