import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// App component
export default class Menu extends React.Component {

  render() {

    // console.log(this.state.bookings)
    return(
        <Nav bsStyle="pills">
            <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/booking-edit">
                <NavItem>
                    Add Booking <Glyphicon glyph="plus-sign"/>
                </NavItem>
            </LinkContainer>
        </Nav>
    )
  }
}

//  className="container"