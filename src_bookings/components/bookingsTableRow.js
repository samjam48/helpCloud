import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class BookingsTableRow extends React.Component {
    constructor(props){
        super(props)

        // bing <this> to the event methods
        this.modalDeleteShow = this.modalDeleteShow.bind(this)
    }

    static get propTypes(){ // make sure we load all the props
        return {
                booking: React.PropTypes.object.isRequired
        }
    }
    
    render(){
        const booking = this.props.booking
        return(
            <tr key={booking.id}>
                <td>#{booking.id}</td>
                <td>{booking.client}</td>
                <td>{booking.jobRef}</td>
                <td>
                    <Link to={'/booking-edit/' + booking.id}>
                        <Button bsSize="xsmall">
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button data-id={booking.id} bsSize="xsmall" data-client={booking.client} onClick={this.modalDeleteShow}>
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }
    // prompt to delete the row
    modalDeleteShow(event){
        console.log('delete clicked')
        const booking_id = Number(event.target.dataset.id);
        const client = event.target.dataset.client
        console.log(booking_id)
        console.log(client)
        this.props.dispatch({
            type: 'bookings.modalDeleteShow',
            id: booking_id,
            client: client
        })
    }
}

// export the connected class
export default connect()(BookingsTableRow)




//     // prompt to delete the row
//     modalDeleteShow(event){
//         console.log('delete clicked')
//         const booking_id = Number(event.target.dataset.id);
//         const client = event.target.dataset.client
//         console.log(booking_id)
//         console.log(client)
//         this.props.dispatch({
//             type: 'BOOKINGS_MODAL_DELETE_SHOW',
//             id: booking_id,
//             client: client
//         })
//     }
// }