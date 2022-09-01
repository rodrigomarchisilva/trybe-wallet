import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchCurrencies,
  updateField,
  alternateMode,
  createExpense,
  updateExpense
} from '../actions';
import Dropdowns from '../basic-components/Dropdowns';
import Input from '../basic-components/Input';
import TextArea from '../basic-components/TextArea';
import StandardButton from '../basic-components/StandardButton';

class Form extends Component {
  componentDidMount() {
    const { dFetchCurrencies } = this.props;
    dFetchCurrencies();
  }

  render() {
    const {
      props: { mode, form, dCreateExpense, dUpdateExpense, dUpdateField }
    } = this;

    const numericInput = {
      field: 'value',
      type: 'number',
      label: 'Valor',
      value: form.value,
      handleChange: dUpdateField
    };

    const textArea = {
      field: 'description',
      label: 'Descrição',
      value: form.description,
      handleChange: dUpdateField
    };

    const createButton = {
      handleClick: dCreateExpense,
      content: 'Adicionar despesa'
    };

    const updateButton = {
      handleClick: dUpdateExpense,
      content: 'Editar despesa'
    };

    const button = mode === 'create' ? createButton : updateButton;

    return (
      <form>
        <Input html={numericInput} />
        <TextArea html={textArea} />
        <Dropdowns />
        <StandardButton html={button} />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  mode: wallet.mode.name,
  form: wallet.form
});

const mapDispatchToProps = (dispatch) => ({
  dFetchCurrencies: () => dispatch(fetchCurrencies()),
  dUpdateField: (field, target) => dispatch(updateField(field, target)),
  dAlternateMode: (id) => dispatch(alternateMode(id)),
  dCreateExpense: () => dispatch(createExpense()),
  dUpdateExpense: () => dispatch(updateExpense())
});

Form.propTypes = {
  dFetchCurrencies: PropTypes.func,
  dUpdateField: PropTypes.func,
  dAlternateMode: PropTypes.func,
  dCreateExpense: PropTypes.func,
  dUpdateExpense: PropTypes.func,
  expenses: PropTypes.object,
  mode: PropTypes.object,
  form: PropTypes.objectOf(PropTypes.string)
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
