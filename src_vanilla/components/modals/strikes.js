import React from 'react';
// import BookingsTableRow from './bookingsTableRow';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';


export class Strikes extends React.Component {
    constructor(props){
        super(props)
        console.log('this.state in strikes')
        console.log(this.state)
        console.log('this.props in strikes')
        console.log(this.props)
        this.state = { modal_strikes: this.props.strikes };

        this.modalStrikesHide = this.modalStrikesHide.bind(this)
    }

    modalStrikesHide(event) {
        this.setState({ modal_strikes: { show: false } })
    }

    render(){
        console.log('strikes modal component')
        return(
            <Modal show={this.state.modal_strikes.visibility} >
                <Modal.Header>
                    <Modal.Title>
                        Strikes Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalStrikesHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


// mapStateToProps NOT BEING CALLED _ WHAT IS GOING WRONG????
// Need to do something else in the store?

function mapStateToProps(state) {
    console.log('state in strikes mapStateToProps')
    console.log(state)
    return { modals: state.modals }
}

export default connect(mapStateToProps)(Strikes)

                // <Button bsStyle="warning" onClick={this.bookingStrikesEdit}>Update</Button>

    // bookingStatusEdit(event){
    //     console.log('status of this booking')
    //     console.log(this.props.modal_status.id)
    //     this.props.dispatch({
    //         type: 'BOOKINGS_STATUS_EDIT',
    //         id: this.props.modal_status.id
    //     })
    //     this.props.dispatch({
    //         type: 'BOOKINGS_MODAL_STATUS_HIDE'
    //     })
    // }
