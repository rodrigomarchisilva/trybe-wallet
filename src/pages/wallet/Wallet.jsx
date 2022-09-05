import { Component } from 'react';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import HistoryTable from '../../components/history-table/HistoryTable';

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
