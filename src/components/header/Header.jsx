import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { GiWallet } from 'react-icons/gi';
import IconGradient from '../../basic-components/IconGradient';
import staticData from './staticData';
const { header, logo, user, amount } = staticData;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { currency: 'BRL' };

    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const { expenses } = this.props;

    let output = 0;

    if (expenses.length > 0) {
      output = expenses
        .map(({ value, currency, exchangeRates }) => value * exchangeRates[currency].ask)
        .reduce((amount, index) => amount + index);
    }
    output = new Intl.NumberFormat([], {
      style: 'currency',
      currency: 'BRL'
    }).format(output);

    return output;
  }

  render() {
    const {
      getTotal,
      state: { currency },
      props: { email }
    } = this;

    const total = getTotal();

    return (
      <header>
        <Grid {...header.grid.props}>
          <Grid {...logo.grid.props}>
            <IconGradient {...logo.svg.props} />
            <GiWallet {...logo.icon.props} />
            <Typography {...logo.typo.props}>{logo.typo.innerText}</Typography>
          </Grid>
          <Grid {...user.grid.props}>
            <Typography {...user.typo.props}>{email || user.typo.innerText}</Typography>
          </Grid>
          <Grid {...amount.grid.props}>
            <Typography {...amount.total.props}>{total}</Typography>
            <Typography {...amount.currency.props}>{currency}</Typography>
          </Grid>
        </Grid>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array
}.isRequired;

export default connect(mapStateToProps, null)(Header);
