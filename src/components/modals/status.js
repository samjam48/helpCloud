import React from 'react';
// import BookingsTableRow from './bookingsTableRow';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';


class BookingStatus extends React.Component {
    constructor(props){
        super(props)
        
        this.state = { modal: false };

        this.modalStatusHide = this.modalStatusHide.bind(this)
        this.bookingStatusEdit = this.bookingStatusEdit.bind(this)
    }

    render(){
        return(
        <Modal show={this.props.modal_status.show} >
            <Modal.Header>
                <Modal.Title>
                    {this.props.modal_status} 
                    <strong>{this.props.modal_status.status}</strong>?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={this.modalStatusHide}>Cancel</Button>
                <Button bsStyle="warning" onClick={this.bookingStatusEdit}>Update</Button>
            </Modal.Footer>
        </Modal>
        )
    }

    modalStatusHide(event){
        this.props.dispatch({
            type: 'BOOKINGS_MODAL_STATUS_HIDE'
        })
    }

    bookingStatusEdit(event){
        console.log('status of this booking')
        console.log(this.props.modal_status.id)
        this.props.dispatch({
            type: 'BOOKINGS_STATUS_EDIT',
            id: this.props.modal_status.id
        })
        this.props.dispatch({
            type: 'BOOKINGS_MODAL_STATUS_HIDE'
        })
    }
}

function mapStateToProps(state){
    // set data for the booking delete modal
    let modal_status;
    if(state.bookings.modal && state.bookings.modal.list_status) {
        modal_status = state.bookings.modal.list_status;
    }
    else {
        modal_status = {
            show: false,
            id: 0,
            client: ''
        }
    }
  return({ modal_status })
}

export default connect(mapStateToProps)(BookingStatus)
