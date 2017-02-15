import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


export default class BookingsTable extends Component {
  render() {
      // let products = [{
      //       id: 1,
      //       type: 'Scooter',
      //       name: "antoine",
      //       price: 120
      //   }, {
      //       id: 2,
      //       status: 'failed',
      //       name: "said",
      //       total: 80
      //   }]
      let products = [{id: 1, jobRef: 1, service:1, type: 1}, {id: 2}]
    return (
      <BootstrapTable data={ products } striped hover>
        <TableHeaderColumn width='130' headerAlign='center' dataField='id' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn width='190' headerAlign='center' dataField='jobRef'>Job Ref</TableHeaderColumn>
        <TableHeaderColumn width='300' headerAlign='center' dataField='service'>Service</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='type'>Type</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='status'>Status</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='client'>Client</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='postcode'>Post code</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='start'>Start</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='hours'>Hours</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='jobRate'>Rate £/h</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='total'>Total</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='type'>type</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='hours'>hours</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='flRate'>rate £/h</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='flTotal'>Total</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='flStatus'>Status</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='statusDate'>Status Date</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='invoiceStatus'>Invoice Status</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='statusDate'>Status Date</TableHeaderColumn>
        <TableHeaderColumn width='150' headerAlign='center' dataField='Comments'>Comments</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}