import React, { Component } from 'react';
// import BookingsTable from './bookings/bookings_table';
// import Reactabular from './reactabular';
// import EditableTable from './editTable';
// import ReduxTable from './reduxTable';
import CRUDTable from './crudTable';
import Table from './bookings/table';
import DataGrid from './datagrid';


export default class App extends Component {
  render(){
    return (
      <div>
        <p>Hello Buzzhire!</p>
        <Table />
        <crudTable />
        <DataGrid />
      </div>
    );
  }
}


        // <EditableTable />
        // <BookingsTable />