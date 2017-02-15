import React from 'react';
import { FormGroup, FormControl, Col, HelpBlock } from 'react-bootstrap';



export default class EditBookingDate extends React.Component {

    // static get propTypes() {
    //     return {
    //         meta: React.PropTypes.object,
    //         input: React.PropTypes.object
    //     }
    // }

    render(){
        return(
            <FormGroup validationState={!this.props.meta.touched ? null:
                                        (this.props.meta.error ? 'error' : 'success')}>
                <Col sm={2}>Date</Col>
                <Col sm={8}>
                <FormControl  id="bookingDate" type="text" placeholder="bookingDate"/>
                <FormControl.Feedback/>
                <HelpBlock>{this.props.meta.touched && this.props.meta.error ? this.props.meta.error : null}</HelpBlock>
                </Col>
            </FormGroup>
        )
    }
}