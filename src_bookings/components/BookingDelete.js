import React from 'react';
// import BookingsTableRow from './bookingsTableRow';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';


export class BookingDelete extends React.Component {
    constructor(props){
        super(props)
        this.modalDeleteHide = this.modalDeleteHide.bind(this)
        this.bookingDelete = this.bookingDelete.bind(this)
    }

    render(){
        return(
        <Modal show={this.props.modal_delete.show} >
            <Modal.Header>
                <Modal.Title>
                    Are you sure you want to delete &nbsp; 
                    <strong>{this.props.modal_delete.client}</strong>?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={this.modalDeleteHide}>No</Button>
                <Button bsStyle="warning" onClick={this.bookingDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>
        )
    }

    modalDeleteHide(event){
        this.props.dispatch({
            type: 'bookings.modalDeleteHide'
        })
    }

    bookingDelete(event){
        console.log('delete this booking')
        console.log(this.props.modal_delete.id)

        this.props.dispatch({ // delete the user with the api
            type: 'bookingsDelete',
            id: this.props.modal_delete.id
        })
        this.props.dispatch({  // delete the user from the state
            type: 'bookings.bookingDelete',
            id: this.props.modal_delete.id
        })
        this.props.dispatch({ // hide the modal
            type: 'bookings.modalDeleteHide'
        })
    }
}

function mapStateToProps(state){
    // set data for the booking delete modal
    let modal_delete;
    if(state.bookings.modal && state.bookings.modal.list_delete) {
        modal_delete = state.bookings.modal.list_delete;
    }
    else {
        modal_delete = {
            show: false,
            id: 0,
            client: ''
        }
    }
  return({ modal_delete })
}

export default connect(mapStateToProps)(BookingDelete)


//     modalDeleteHide(event){
//         this.props.dispatch({
//             type: 'BOOKINGS_MODAL_DELETE_HIDE'
//         })
//     }

//     bookingDelete(event){
//         console.log('delete this booking')
//         console.log(this.props.modal_delete.id)
//         this.props.dispatch({
//             type: 'BOOKING_DELETE',
//             id: this.props.modal_delete.id
//         })
//         this.props.dispatch({
//             type: 'BOOKINGS_MODAL_DELETE_HIDE'
//         })
//     }
// }