import React, { Component } from 'react';
import Form from '../../components/Form';
import Header from '../../components/header/Header';
import HistoryTable from '../../components/HistoryTable';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <HistoryTable />
      </div>
    );
  }
}
