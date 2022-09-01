// Login

export const EMAIL_AND_PASSWORD = 'EMAIL_AND_PASSWORD';

export const getUserInfo = (userInfo) => ({
  type: EMAIL_AND_PASSWORD,
  email: userInfo.email,
  password: userInfo.password
});

//--------------------------------------------------------------------------------

// API Requests

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(receiveCurrencies(currencies)));
};

//--------------------------------------------------------------------------------

// Form Control

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const ALTERNATE_MODE = 'ALTERNATE_MODE';

export const updateField = (field, { value }) => ({
  type: UPDATE_FIELD,
  field,
  value
});

export const alternateMode = (id) => ({
  type: ALTERNATE_MODE,
  id
});

//--------------------------------------------------------------------------------

// CRUD

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const createExpense = () => ({
  type: CREATE_EXPENSE
});

export const updateExpense = () => ({
  type: UPDATE_EXPENSE
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id
});
