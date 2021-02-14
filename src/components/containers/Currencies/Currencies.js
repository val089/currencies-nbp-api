import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../../../redux/redux';
import './Currencies.scss';
import CurrenciesList from '../../CurrenciesList';

const Currencies = ({ fetchCurrencies, currencies, isLoading, isError}) => {

    useEffect(() => {
        fetchCurrencies();
    }, [fetchCurrencies]);

    return(
        <section className="currencies">
            {isLoading && <p>Loading...</p>}
            {isError && <p>An error has occurred</p>}
           <CurrenciesList data={currencies} />
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
        isLoading: state.currencies.isLoading,
        isError: state.currencies.isError
    };
};

const mapDispatchToProps = {
    fetchCurrencies
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);