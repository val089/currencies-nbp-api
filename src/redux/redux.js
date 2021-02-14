import axios from 'axios';

const FETCH_CURRENCIES_REQUESTED = 'FETCH_CURRENCIES_REQUESTED';
const FETCH_CURRENCIES_SUCCEEDED = 'FETCH_CURRENCIES_SUCCEEDED';
const FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED';

const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
      axios.get('https://api.nbp.pl/api/exchangerates/tables/a/last/')
      .then(({data}) => {
        dispatch(fetchSucceeded(data[0].rates));
      })
        .catch(error => {
          dispatch(fetchFailed(error));
        });
    };
};

export const fetchRequested = () => ({
  type: FETCH_CURRENCIES_REQUESTED
});

export const fetchFailed = () => ({
  type: FETCH_CURRENCIES_FAILED
});

export const fetchSucceeded = (data) => ({
  type: FETCH_CURRENCIES_SUCCEEDED,
  payload: data
});

export const addToFavourites = code => ({
  type: ADD_TO_FAVOURITES,
  payload: {
    code
  }
});

export const removeFromFavourites = code => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: {
    code
  }
});

const INITIAL_STATE = {
  currencies: [],
  favourites: [],
  isLoading: false,
  isError: false
};

const currenciesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_CURRENCIES_REQUESTED:
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case FETCH_CURRENCIES_SUCCEEDED:
        return {
          ...state,
          isLoading: false,
          isError: false,
          currencies: action.payload
        };
      case FETCH_CURRENCIES_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      case ADD_TO_FAVOURITES:
        const item = state.currencies.find(
          (currency) => currency.code === action.payload.code
        );
        const inFavourites = state.favourites.find((item) =>
          item.code === action.payload.code ? true : false
        );
        return {
          ...state,
          favourites: inFavourites
            ? state.favourites.map((item) =>
                item.code === action.payload.code
                  ? { ...item }
                  : item
              )
            : [...state.favourites, {...item}],
        };
      case REMOVE_FROM_FAVOURITES:
        return {
          ...state,
          favourites: state.favourites.filter(item => item.code !== action.payload.code),
          };
      default:
        return state;
    }
  };

export default currenciesReducer;