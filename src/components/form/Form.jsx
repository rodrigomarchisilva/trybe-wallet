import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchCurrencies,
  updateField,
  alternateMode,
  createExpense,
  updateExpense
} from '../../actions';
import Dropdown from '../../basic-components/Dropdown';
import { Button, Grid, TextField } from '@mui/material';
import { inputs, formGrid, inputGrid, buttons, formStyle } from './staticData';
import { deepClone } from '../../helpers';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dFetchCurrencies } = this.props;
    dFetchCurrencies();
  }

  handleSubmit = async (submit) => {
    const { dFetchCurrencies } = this.props;
    await dFetchCurrencies();
    submit();
  };

  render() {
    const {
      currencies,
      mode,
      form,
      form: { currency, method, tag },
      dCreateExpense,
      dUpdateExpense,
      dUpdateField
    } = this.props;

    const numericInput = {
      ...inputs.number.props,
      value: form.value,
      onChange: ({ target }) => dUpdateField('value', target)
    };

    const textArea = {
      ...inputs.textArea.props,
      value: form.description,
      onChange: ({ target }) => dUpdateField('description', target)
    };

    const selects = [
      {
        ...deepClone(inputs.selects.currency),
        value: currency,
        onChange: ({ target }) => dUpdateField('currency', target),
        options: Object.keys(currencies).filter((c) => c !== 'USDT')
      },
      {
        ...deepClone(inputs.selects.method),
        value: method,
        onChange: ({ target }) => dUpdateField('method', target)
      },
      {
        ...deepClone(inputs.selects.tag),
        value: tag,
        onChange: ({ target }) => dUpdateField('tag', target)
      }
    ];

    const createButton = {
      ...deepClone(buttons.create),
      props: {
        ...deepClone(buttons.create.props),
        onClick: () => this.handleSubmit(dCreateExpense)
      }
    };

    const updateButton = {
      ...deepClone(buttons.update),
      props: {
        ...deepClone(buttons.update.props),
        onClick: () => this.handleSubmit(dUpdateExpense)
      }
    };

    const button = mode === 'create' ? createButton : updateButton;

    return (
      <form {...formStyle}>
        <Grid {...formGrid.props}>
          <Grid {...inputGrid.props}>
            <TextField {...numericInput} />
          </Grid>
          <Grid {...inputGrid.props}>
            <TextField {...textArea} />
          </Grid>
          {selects.map((select) => (
            <Dropdown {...select} key={select.id} />
          ))}
          <Grid {...inputGrid.props}>
            <Button {...button.props}>{button.innerText}</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  mode: wallet.mode.name,
  form: wallet.form,
  currencies: wallet.currencies
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
  form: PropTypes.objectOf(PropTypes.string),
  currencies: PropTypes.arrayOf(PropTypes.object)
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
