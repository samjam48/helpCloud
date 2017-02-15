import React from "react";
import BookingsTable from '../components/bookingsTable';


export default class Home extends React.Component {

  render() {
    return(
        <div className="container">
            <BookingsTable />
        </div>
    )
  }
}
