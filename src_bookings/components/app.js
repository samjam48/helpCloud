import React from "react";
import Menu from "./Menu";
// import BookingsTable from './bookingsTable';
// import { connect } from "react-redux";
// import { ProgressBar } from "react-bootstrap";
// import "../stylesheets/main.scss";

// App component
export default class App extends React.Component {

  render() {

    // console.log(this.state.bookings)
    return(
    <div className="container">
      <div className="row">
        <Menu />
      </div>
      <div className="row">
       {this.props.children}
      </div>
    </div>
    )
  }
}
