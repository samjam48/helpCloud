import React from 'react';
import BookingsTableRow from './bookingsTableRow';
import BookingDelete from './BookingDelete';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, Pagination, ProgressBar } from 'react-bootstrap';


export class BookingsTable extends React.Component {
    constructor(props){
      super(props)
      // when we don't have bookings, update bookings list from api
      if (0 === this.props.bookings.length){
        this.props.dispatch({
          type: 'bookingsFetchList'
        })
      }
      // bind this to event methods
      this.changePage = this.changePage.bind(this);
    }

    render(){

        const per_page = 10
        const pages = Math.ceil(this.props.bookings.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        if (this.props.bookings.length){
          return(
          <div>
            <Table bordered hover responsive striped >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>client</th>
                  <th>Job</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bookings.map((booking, index) => {
                    if (index >= start_offset && start_count < per_page) {
                      start_count++
                      return(
                        <BookingsTableRow key={booking.id} booking={booking} />
                      )                  
                    }
                  }
                )}
              </tbody>
            </Table>
            <Pagination className="users-pagination-pull-right" bsSize="medium" 
              maxButtons={10} first last next prev boundaryLinks
              items={pages} activePage={current_page} onSelect={this.changePage}
              />
            <BookingDelete />
          </div>
          )
      }
      else {
        return(
          <ProgressBar active now={100} />
        )
      }
    }

    changePage(page){
      this.props.dispatch(push('/?page=' + page))
    }
}

function mapStateToProps(state){
  return({
    bookings: state.bookings.list || [],
    page:  Number(state.routing.locationBeforeTransitions.query.page) || 1  
  })
}

export default connect(mapStateToProps)(BookingsTable)