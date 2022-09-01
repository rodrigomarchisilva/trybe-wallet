import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateField } from '../actions';

class Dropdowns extends Component {
  render() {
    const {
      props: {
        currencies,
        form: { currency, method, tag },
        dUpdateField
      }
    } = this;

    const options = {
      currency: Object.keys(currencies).filter((c) => c !== 'USDT'),
      method: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']
    };

    const selects = [
      { field: 'currency', label: 'Moeda', value: currency },
      { field: 'method', label: 'Método de pagamento', value: method },
      { field: 'tag', label: 'Tag', value: tag }
    ];

    return (
      <>
        {selects.map(({ field, label, value }) => (
          <label htmlFor={field} key={field}>
            {label}
            <select id={field} value={value} onChange={({ target }) => dUpdateField(field, target)}>
              {options[field].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  form: wallet.form
});

const mapDispatchToProps = (dispatch) => ({
  dUpdateField: (field, target) => dispatch(updateField(field, target))
});

Dropdowns.propTypes = {
  currencies: PropTypes.object,
  form: PropTypes.objectOf(PropTypes.string)
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Dropdowns);
