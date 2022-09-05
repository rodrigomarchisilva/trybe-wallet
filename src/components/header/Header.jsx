import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { GiWallet } from 'react-icons/gi';
import IconGradient from '../../basic-components/IconGradient';
import { header, logo, user, amount } from './staticData';

class Header extends Component {
  constructor(props) {
    super(props);

    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const { expenses } = this.props;
    const real = { style: 'currency', currency: 'BRL' };
    let output = 0;

    if (expenses.length > 0) {
      output = expenses
        .map(({ value, currency, exchangeRates }) => value * exchangeRates[currency].ask)
        .reduce((amount, index) => amount + index);
    }
    output = new Intl.NumberFormat([], real).format(output);

    return output;
  }

  render() {
    const {
      getTotal,
      props: { email }
    } = this;

    return (
      <header>
        <Grid {...header.grid.props}>
          <Grid {...logo.grid.props}>
            <IconGradient {...logo.svg.props} />
            <GiWallet {...logo.icon.props} />
            <Typography {...logo.typo.props}>{logo.typo.innerText}</Typography>
          </Grid>
          <Grid {...user.grid.props}>
            <Typography {...user.typo.props}>{email || user.typo.fillerText}</Typography>
          </Grid>
          <Grid {...amount.grid.props}>
            <Typography {...amount.total.props}>{getTotal()}</Typography>
            <Typography {...amount.currency.props}>{amount.currency.innerText}</Typography>
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
