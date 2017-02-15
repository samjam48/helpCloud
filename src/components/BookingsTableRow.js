import React from 'react'
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Table, Button, ButtonToolbar, DropdownButton, MenuItem, Field, FieldGroup, FormGroup, FormControl, Col, InputGroup, Form, Glyphicon } from 'react-bootstrap';

import { modalStrikesShow, changeStatus, textChange } from '../actions/index';   // { modalStrikesShow, changeStatus }   * as actions 
import { Strikes } from './modals/strikes';

import { invoicesRefs, extraCharges, chargesTotal, getHour, getDate, jobHours, strikes } from '../api/data_handlers'
import EditBookingDate from './form_fields/EditBookingDate';
import EditStatus from './form_fields/EditStatus';
import EditText from './form_fields/EditText';
import InnerTable from './InnerTable';


class BookingsTableRow extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            modal_request: this.props.modals.modal_request,
            modal_charges: this.props.modals.modal_charges,
            modal_status: this.props.modals.modal_status,
            modal_strikes: this.props.modals.modal_strikes,
            }

        // bind <this> to the event methods
        this.modalRequestShow = this.modalRequestShow.bind(this)
        this.modalRequestHide = this.modalRequestHide.bind(this)
        this.modalChargesShow = this.modalChargesShow.bind(this)
        this.modalChargesHide = this.modalChargesHide.bind(this)
        this.modalStatusShow = this.modalStatusShow.bind(this)
        this.modalStatusHide = this.modalStatusHide.bind(this)
        // this.modalStrikesShow = this.modalStrikesShow.bind(this)
    }

    modalRequestShow(event) {
        console.log('status clicked')
        console.log(event)
        const booking_id = Number(event.target.dataset.id);
        const request = event.target.dataset.request
        console.log(booking_id)
        console.log(request)
        this.setState({ modal_request: {visibility: true } })
    }
    modalRequestHide(event) {
        console.log('status clicked')
        console.log(event)
        const booking_id = Number(event.target.dataset.id);
        const request = event.target.dataset.request
        console.log(booking_id)
        console.log(request)
        this.setState({ modal_request: {visibility: false} })
        // this.props.dispatch({
        //     type: 'BOOKINGS_MODAL_STATUS_SHOW',
        //     id: booking_id,
        //     status: status
        // })
    }
    modalChargesShow(event) {
        this.setState({ modal_charges: {visibility: true } })
    }
    modalChargesHide(event) {
        this.setState({ modal_charges: {visibility: false} })
    }

    modalStatusShow(event) {
        this.setState({ modal_status: {visibility: true } })
    }
    modalStatusHide(event) {
        this.setState({ modal_status: {visibility: false} })
    }

    handleClick(event){                     // change week forwards/backwards and then pull data as a callback
        console.log('strike clicked')
        console.log(event)
        // let change = (event.target.id == "nextWeek") ? 7 : -7;
        
        this.props.dispatch( modalStrikesShow(event) )
    }



    static get propTypes(){ // make sure we load all the props
        return {
                booking: React.PropTypes.object.isRequired
        }
    }    
    
    componentWillReceiveProps(nextProps){    // update state with new data
        this.setState({ modals: nextProps.modals })
    }

    onInputChange(event) {
        let text = event.target.value
        console.log(text)
        // this.setState({term});
        this.props.textChange(event);
    }


    render(){
        const booking = this.props.booking
        // console.log('table row state: ' + booking.id)
        // console.log(this.state)
        // console.log((booking.jobrequest.start_datetime).slice(0,15))

        return(
            <tr key={booking.id} >
                <td>{booking.jobrequest.reference_number}</td>
                <td>{booking.jobrequest.service}</td>
                <td>{booking.jobrequest.client_full.company_name}</td>
                <td>{booking.jobrequest.postcode}</td>
                <td className='status' id={booking.id + '_status'} >
                    <EditStatus key={booking.id} booking={booking} />
                </td>
                <td>
                    <a onClick={this.modalRequestShow} data-booking={booking}>
                        {getDate(booking.jobrequest.start_datetime)}
                        <Modal show={this.state.modal_request.visibility}  >
                            <Modal.Header closeButton >
                                <Modal.Title>Job Request Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form horizontal >
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col sm={2}>Date</Col>
                                        <Col sm={10}>
                                            <FormControl type="date" defaultValue={booking.jobrequest.start_time} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col sm={2}>Start</Col>
                                        <Col sm={10}>
                                            <FormControl type="datetime-local" defaultValue={booking.jobrequest.start_datetime} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col sm={2}>Client Rate</Col>
                                        <Col sm={10}>
                                            <FormControl type="number" defaultValue={booking.client_pay_per_hour} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={2} sm={8}>
                                            <Button type="submit" >
                                                Update Booking
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalRequestHide}>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </a>
                </td>
                <td>
                    <a onClick={this.modalRequestShow} data-booking={booking}>
                        {booking.jobrequest.start_time.slice(0,5)}
                    </a>
                </td>
                <td>
                    <a onClick={this.modalRequestShow} data-booking={booking}>
                        {jobHours(booking.jobrequest.end_datetime, booking.jobrequest.start_datetime)}
                    </a>
                </td>
                <td  style={{ 'min-width': '110px' }} >
                    <EditText id={booking.id} booking={booking} unit='£' type='number' field="client_pay_per_hour" />
                </td>
                <td>
                    <InnerTable id={booking.id} array={booking.additionalcharges} field='charges'/>
                </td>
                <td>
                    £{chargesTotal('client', booking.additional_charges) }
                </td>
                <td>
                    £{booking.jobrequest.client_total_cost}
                </td>
                <td>
                    __client paid__
                    {/*£{booking.jobrequest.paid}*/}
                </td>
                <td>
                    __Invoices__
                    {/*<InnerTable array={booking.jobrequest.invoices} field='invoices'/>*/}
                </td>


                <td className='blankCol'> </td>


                <td>{booking.freelancer.full_name}</td>
                <td>__FL Role__
                    {/*{booking.freelancer.role}*/}
                </td>
                <td>
                    {getDate(booking.freelancer_confirmed)}
                </td>
                <td>
                    {getHour(booking.datetime_started)}
                </td>
                <td>
                    {getHour(booking.datetime_finished)}
                </td>
                <td>
                    {jobHours(booking.datetime_finished, booking.datetime_started)}
                </td>
                <td style={{ 'min-width': '110px' }}>
                    <EditText id={booking.id} booking={booking} unit='£' type='number' field="freelancer_pay_per_hour" />                    
                </td>
                <td>
                    <a onClick={this.modalChargesShow} data-Charges={booking.additional_charges} data-id={booking.id}>
                        £{chargesTotal('freelancer', booking.additional_charges)}
                    </a>
                </td>
                <td>
                    £{booking.freelancer_total_pay}
                </td>
                <td>__PAID__</td>
                <td>
                    __Payments__
                    {/*<InnerTable array={booking.payments} field='payments'/>                    */}
                </td>
                <td>
                    <InnerTable array={booking.strikes} field='strikes'/>   
                </td> 
            </tr>
        )
    }
}
function mapStateToProps(state=state) {
    return { modals: state.modals }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ modalStrikesShow, changeStatus, textChange, dispatch }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(BookingsTableRow)



                    {/*<a onClick={this.modalRequestShow} data-booking={booking}>
                        £{booking.client_pay_per_hour}
                    </a>*/}
// ---------   Reik multiple select - START ----------------- //

/*import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'

                    <RIESelect
                    value={this.state.select}
                    className={this.state.highlight ? "editable" : ""}
                    options={this.state.selectOptions}
                    change={this.virtualServerCallback}
                    classLoading="loading"
                    propName="select" />
                    {this.state.showSource ? <Highlight className="jsx">
                    {`<RIESelect
            value={this.state.select}
            className={this.state.highlight ? "editable" : ""}
            options={this.state.selectOptions}
            change={this.virtualServerCallback}
            classLoading="loading"
            propName="select" />`}
                    </Highlight> : null}

                                                    <RIEInput
          value={getHour(booking.jobrequest.start_datetime)}
          change={this.virtualServerCallback}
          propName="text"
          className={this.state.highlight ? "editable" : ""}
          validate={this.isStringAcceptable}
          classLoading="loading"
          classInvalid="invalid" />
        {this.state.showSource ? <Highlight className="jsx">
        {`<RIEInput
  value={this.state.text}
  change={this.virtualServerCallback}
  propName="text"
  className={this.state.highlight ? "editable" : ""}
  validate={this.isStringAcceptable}
  classLoading="loading"
  classInvalid="invalid"/>`}
        </Highlight> : null}

    virtualServerCallback(newState) {
        if (this.state.simulateXHR) {
        window.setTimeout(function() {
        this.changeState(newState);
        }.bind(this), this.state.XHRDelay);
        } else {
        this.changeState(newState);
        }
    };

    changeState(newState) {
        this.setState(newState);
    };

    isStringAcceptable(string) {
        return (string.length >= 1);  // Minimum 4 letters long
    };

    isStringEvenNumber (string) {
        console.log('is even: ' + string);
        var number = parseInt(string);
        if (isNaN(number) || !isFinite(number)) return false;
        return number % 2 == 0;
    };

    isValidXHRDelay(text) {
        let number = parseInt(text);
        if (isNaN(number)) return false;
        return (0 < number) && (number < 50000);
    };

    formatInteger(number) {
        return number.toString() + " feet";
    };

    formatMillisecondsAppend (text) {
        return text + " ms";
    };*/

// ---------   Reik multiple select END ----------------- //

                                    // <Field name="date" component={EditBookingDate}/>
                                    // <Field name="startTime" />
                                    // <Field name="endTime" />
                                    // <Field name="clRate" />
                                    // DAte, Start, End, Rate
                                    // <FieldGroup
                                    //     id="bookingRequestDate"
                                    //     type="date"
                                    //     label="Date"
                                    //     />
                                    // <FormGroup>
                                    //     <InputGroup>
                                    //         <InputGroup.Addon>£</InputGroup.Addon>
                                    //         <FormControl type="text" />
                                    //         <InputGroup.Addon>.00</InputGroup.Addon>
                                    //     </InputGroup>
                                    // </FormGroup>

                    // <a onClick={this.modalStatusShow} data-status={booking.status} data-id={booking.id}>
                    //     {booking.status}
                    //     <Modal show={this.state.modal_status.visibility}  >
                    //         <Modal.Header>
                    //             <Modal.Title>
                    //                 Change the status
                    //             </Modal.Title>
                    //         </Modal.Header>
                    //         <Modal.Footer>
                    //             <Button onClick={this.modalStatusHide}>Cancel</Button>
                    //         </Modal.Footer>
                    //     </Modal>
                    // </a>
    // modalStrikesShow(event) {
    //     console.log('strikes clicked')
    //     console.log(event)
    //     const booking_id = Number(event.target.dataset.id);
    //     const strikes = event.target.dataset.strikes
    //     console.log(booking_id)
    //     console.log(request)
    //     // this.setState({ modal_strikes: true })
    //     this.props.dispatch({
    //         type: 'BOOKINGS_MODAL_STRIKES_SHOW',
    //         id: booking_id,
    //         strikes: strikes
    //     })
    // }

// import React from 'react';
// import { Button, Glyphicon } from 'react-bootstrap';
// import { Link } from 'react-router';
// import { connect } from 'react-redux';

// class BookingsTableRow extends React.Component {
//     constructor(props){
//         super(props)

//         // bing <this> to the event methods
//         this.modalDeleteShow = this.modalDeleteShow.bind(this)
//     }
    
//     render(){
//         const booking = this.props.booking
//         return(
//             <tr key={booking.id}>
//                 <td>#{booking.id}</td>
//                 <td>{booking.client}</td>
//                 <td>{booking.jobRef}</td>
//                 <td>
//                     <Link to={'/booking-edit/' + booking.id}>
//                         <Button bsSize="xsmall">
//                             Edit <Glyphicon glyph="edit"/>
//                         </Button>
//                     </Link>
//                 </td>
//                 <td>
//                     <Button data-id={booking.id} bsSize="xsmall" data-client={booking.client} onClick={this.modalDeleteShow}>
//                         Delete <Glyphicon glyph="remove-circle"/>
//                     </Button>
//                 </td>
//             </tr>
//         );
//     }
//     // prompt to delete the row
//     modalDeleteShow(event){
//         console.log('delete clicked')
//         const booking_id = Number(event.target.dataset.id);
//         const client = event.target.dataset.client
//         console.log(booking_id)
//         console.log(client)
//         this.props.dispatch({
//             type: 'bookings.modalDeleteShow',
//             id: booking_id,
//             client: client
//         })
//     }
// }

// BookingsTableRow.propTypes = {
//     booking: React.PropTypes.object.isRequired
// }

// // export the connected class
// export default connect()(BookingsTableRow)


