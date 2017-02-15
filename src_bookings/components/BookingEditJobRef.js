import React from 'react';
import {  FormGroup, FormControl, Col, InputGroup, Glyphicon } from 'react-bootstrap';



export default class BookingEditClient extends React.Component {

    static get propTypes() {
        return {
            input: React.PropTypes.object
        }
    }

    render(){
        return(
            <FormGroup>
                <Col sm={2}>Job Ref</Col>
                <Col sm={8}>
                <InputGroup>
                    <FormControl {...this.props.input} id="jobRef" type="text" placeholder="Job Ref"/>
                    <InputGroup.Addon>
                    <Glyphicon glyph="briefcase" />
                    </InputGroup.Addon>
                </InputGroup>
                </Col>
            </FormGroup>
        )
    }
}