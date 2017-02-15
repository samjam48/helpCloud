import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button } from 'react-bootstrap';

// import { fetchData, thisWeek, changeWeek } from '../actions/index';
// import { getMonthYear } from './date_handlers'
// import { CalHeader } from './cal_header';
// import { CalEvents } from './cal_events';
import BookingsTableRow from './BookingsTableRow'




class BookingsTable extends React.Component {
    constructor(props) {
        super(props);
        // let Events =  CalEvents(this.props.Events)
        this.state = { bookings: this.props.bookings }
    }

    componentWillReceiveProps(nextProps){    // update state with new data
        console.log(nextProps)
        this.setState({ bookings: nextProps.bookings })
    }

    render(){
        console.log('table state')
        console.log(this.state)
 
        return(
        <div>
          <Table bordered hover responsive striped >
            <thead>
              <tr>
                <th style={{width: 30}} >Job Ref </th>
                <th style={{width: 30}} >Type</th>
                <th style={{width: 30}} >Client</th>
                <th style={{width: 30}} >Location</th>
                <th style={{width: 30}} >Status</th>
                <th style={{width: 35}} >Date</th>
                <th style={{width: 35}} >Start</th>
                <th style={{width: 15}} >Hours</th>
                <th style={{width: 30}} >Cl Rate</th>
                <th style={{width: 30}} >Extra Charges</th>
                <th style={{width: 30}} >Charges Total</th>
                <th style={{width: 30}} >Total</th>
                <th style={{width: 30}} >Paid</th>
                <th style={{width: 30}} >Invoices</th>

                <th className='blankCol'></th>

                <th style={{width: 30}} >Freelancer</th>
                <th style={{width: 30}} >Type</th>
                <th style={{width: 30}} >Accepted</th>
                <th style={{width: 30}} >Start (settled)</th>
                <th style={{width: 30}} >End (settled)</th>
                <th style={{width: 30}} >Duration</th>
                <th style={{width: 30}} >FL Rate</th>
                <th style={{width: 30}} >FL Charges</th>
                <th style={{width: 30}} >Total Pay</th>
                <th style={{width: 30}} >Paid</th>
                <th style={{width: 30}} >Payments</th>
                <th style={{width: 30}} >Strikes</th>
              </tr>
            </thead>
            <tbody>
               {this.state.bookings.map((booking, index) => {
                    return(
                      <BookingsTableRow key={booking.id} booking={booking} />
                    )
                }
              )}
            </tbody>
          </Table>

        </div>
        )
    }

    // changePage(page){
    //   this.props.dispatch(push('/?page=' + page))
    // }
}
function mapStateToProps(state=state) {
    return { bookings: state.bookings };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchData, thisWeek, dispatch }, dispatch)
// }


export default connect(mapStateToProps)(BookingsTable)

// function mapStateToProps(state){
//   return({
//     bookings: state.bookings.list,
//     page:  Number(state.routing.locationBeforeTransitions.query.page) || 1  
//   })
// }

// export default connect(mapStateToProps)(BookingsTable)


        //   <Pagination className="users-pagination-pull-right" bsSize="medium" 
        //     maxButtons={10} first last next prev boundaryLinks
        //     items={pages} activePage={current_page} onSelect={this.changePage}
        //     />
        //   <BookingDelete />

        //       {this.props.bookings.map((booking, index) => {
        //           if (index >= start_offset && start_count < per_page) {
        //             start_count++
        //             return(
        //               <BookingsTableRow key={booking.id} booking={booking} />
        //             )                  
        //           }
        //         }
        //       )}