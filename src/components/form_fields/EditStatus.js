import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import { changeStatus } from '../../actions/index'; 
import { statusText } from '../../api/data_handlers'; 


class EditStatus extends React.Component {

    handleChange(event){                     // change week forwards/backwards and then pull data as a callback
        console.log('status clicked')
        console.log(event)
        // let change = (event.target.id == "nextWeek") ? 7 : -7;
        
        this.props.dispatch( changeStatus(event) )
    }

    render(){
        const booking = this.props.booking

        return(
            <ButtonToolbar>
                <DropdownButton bsSize="small" title={statusText(booking.status)} id="dropdown-size-large" noCaret>
                    <MenuItem onClick={this.handleChange.bind(this)} data-id={booking.id} data-status="OK" eventKey="1">Confirmed / Complete</MenuItem>
                    <MenuItem onClick={this.handleChange.bind(this)} data-id={booking.id} data-status="CA">Client Cancelled</MenuItem>
                    <MenuItem onClick={this.handleChange.bind(this)} data-id={booking.id} data-status="FC">FL Cancelled / No Show</MenuItem>
                    <MenuItem onClick={this.handleChange.bind(this)} data-id={booking.id} data-status="UN">Unsatisfied</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        )
    }
}

function mapStateToProps(state=state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeStatus, dispatch }, dispatch)
}


export default connect( mapStateToProps , mapDispatchToProps )(EditStatus)
