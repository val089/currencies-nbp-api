import axios from 'axios';

const FETCH_CURRENCIES_REQUESTED = 'FETCH_CURRENCIES_REQUESTED';
const FETCH_CURRENCIES_SUCCEEDED = 'FETCH_CURRENCIES_SUCCEEDED';
const FETCH_CURRENCIES_FAILED = 'FETCH_CURRENCIES_FAILED';

export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
      axios.get('http://api.nbp.pl/api/exchangerates/tables/a/last/')
      .then(({ data }) => {
        dispatch(fetchSucceeded(data));
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

const INITIAL_STATE = {
  currencies: [],
  favourites: [],
  isLoading: false,
  isError: false
};

export default (state = INITIAL_STATE, action) => {
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
          books: action.payload
        };
      case FETCH_CURRENCIES_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        return state;
    }
  };
