import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alternateMode, deleteExpense } from '../actions';

const headers = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'
];

class HistoryTable extends Component {
  constructor(props) {
    super(props);

    this.formatNumber = this.formatNumber.bind(this);
  }

  formatNumber(number, currency) {
    const isDogecoin = currency === 'DOGE';
    if (isDogecoin) currency = 'GBP';
    number = new Intl.NumberFormat([], { style: 'currency', currency }).format(number);
    if (isDogecoin) number = number.replace('£', 'Ð');
    return number;
  }

  render() {
    const {
      formatNumber,
      props: { expenses, mode, dAlternateMode, dDeleteExpense }
    } = this;

    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, value, description, currency, method, tag, exchangeRates }) => (
            <tr key={id}>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{formatNumber(value, currency)}</td>
              <td>{currency}</td>
              <td>{formatNumber(exchangeRates[currency].ask, 'BRL')}</td>
              <td>{formatNumber(exchangeRates[currency].ask * value, 'BRL')}</td>
              <td>
                {exchangeRates[currency].name.slice(0, exchangeRates[currency].name.indexOf('/'))}
              </td>
              <td>
                <button type="button" onClick={() => dAlternateMode(id)}>
                  {mode.name === 'update' && mode.id === id ? 'Cancelar' : 'Editar'}
                </button>
                <button type="button" onClick={() => dDeleteExpense(id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  mode: wallet.mode
});

const mapDispatchToProps = (dispatch) => ({
  dAlternateMode: (id) => dispatch(alternateMode(id)),
  dDeleteExpense: (id) => dispatch(deleteExpense(id))
});

HistoryTable.propTypes = {
  expenses: PropTypes.array,
  mode: PropTypes.objectOf(PropTypes.string),
  dAlternateMode: PropTypes.func,
  dDeleteExpense: PropTypes.func
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable);
