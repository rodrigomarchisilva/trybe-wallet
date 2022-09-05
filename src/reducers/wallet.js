import {
  REQUEST_CURRENCIES,
  RECEIVE_CURRENCIES,
  UPDATE_FIELD,
  ALTERNATE_MODE,
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  expenses: [],
  mode: { name: 'create', id: undefined },
  form: {
    value: 1,
    description: 'Exemplo',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação'
  },
  currencies: {},
  id: 0
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
        isFetching: false
      };
    case UPDATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      };
    case ALTERNATE_MODE:
      return {
        ...state,
        form:
          state.mode.name === 'update' && action.id === state.mode.id
            ? INITIAL_STATE.form
            : state.expenses.find((e) => e.id === action.id),
        mode: {
          name: state.mode.name === 'update' && action.id === state.mode.id ? 'create' : 'update',
          id: state.mode.name === 'update' && action.id === state.mode.id ? undefined : action.id
        }
      };
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          { ...state.form, id: state.id, exchangeRates: state.currencies }
        ],
        id: state.id + 1,
        form: INITIAL_STATE.form
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses].map((e) => {
          let output = e;
          if (e.id === state.mode.id) {
            output = {
              ...state.form,
              id: e.id,
              exchangeRates: state.currencies
            };
          }
          return output;
        }),
        mode: INITIAL_STATE.mode,
        form: INITIAL_STATE.form
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.id),
        mode: INITIAL_STATE.mode,
        form: INITIAL_STATE.form
      };
    default:
      return state;
  }
}
