/* eslint-disable react/no-children-prop */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alternateMode, deleteExpense } from '../../actions';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { table, head, cells, buttons } from './staticData';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

class HistoryTable extends Component {
  constructor(props) {
    super(props);

    this.formatNumber = this.formatNumber.bind(this);
    this.getCells = this.getCells.bind(this);
  }

  formatNumber(number, currency) {
    const isDogecoin = currency === 'DOGE';
    if (isDogecoin) currency = 'GBP';
    number = new Intl.NumberFormat([], { style: 'currency', currency }).format(number);
    if (isDogecoin) number = number.replace('£', 'Ð');
    return number;
  }

  getCells({ id, value, description, currency, method, tag, exchangeRates }) {
    const {
      formatNumber,
      props: { dAlternateMode, dDeleteExpense, mode }
    } = this;
    return [
      { props: cells.body.props, inner: description },
      { props: cells.body.props, inner: tag },
      { props: cells.body.props, inner: method },
      { props: cells.body.props, inner: formatNumber(value, currency) },
      { props: cells.body.props, inner: currency },
      { props: cells.body.props, inner: formatNumber(exchangeRates[currency].ask, 'BRL') },
      { props: cells.body.props, inner: formatNumber(exchangeRates[currency].ask * value, 'BRL') },
      {
        props: cells.body.props,
        inner: exchangeRates[currency].name.slice(0, exchangeRates[currency].name.indexOf('/'))
      },
      {
        props: cells.buttons.props,
        inner: (
          <>
            <IconButton
              {...buttons.props}
              color={mode.name === 'update' && mode.id === id ? 'primary' : 'success'}
              onClick={() => dAlternateMode(id)}
              children={<FaEdit />}
            />
            <IconButton
              {...buttons.props}
              color="error"
              onClick={() => dDeleteExpense(id)}
              children={<FaTrashAlt />}
            />
          </>
        )
      }
    ];
  }

  render() {
    const {
      getCells,
      props: { expenses }
    } = this;

    return (
      <Box p={2}>
        <TableContainer component={Paper}>
          <Table {...table.props}>
            <TableHead {...head.props}>
              <TableRow>
                {head.innerText.map((header) => (
                  <TableCell key={header} {...cells.head.props}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  {getCells(expense).map(({ props, inner }, i) => (
                    <TableCell {...props} key={i}>
                      {inner}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
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
