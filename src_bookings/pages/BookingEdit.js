import React from "react";
import { PageHeader, Form, FormGroup, FormControl, Col, Button, Glyphicon, InputGroup, HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import BookingEditClient from '../components/BookingEditClient'
import BookingEditJobRef from '../components/BookingEditJobRef'

export class BookingEdit extends React.Component {

  // Current form type: add or edit
  form_type;
  constructor(props){
    super(props)
    this.form_type = (props.initialValues.id > 0) ? 'edit' : 'add';
    this.formSubmit = this.formSubmit.bind(this)
  }

  render() {
    return(
    <div>
      <PageHeader>
        {'edit' === this.form_type ? 'Edit Booking' : 'Add Booking'}
      </PageHeader>
      <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
        <Field name="client" component={BookingEditClient}/>
        <Field name="jobRef" component={BookingEditJobRef}/>
        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button type="submit" disabled={this.props.invalid || this.props.submitting}>
              Save Booking
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
    )
  }

  formSubmit(values) {
    const upper_form_type = this.form_type.charAt(0).toUpperCase() + this.form_type.slice(1);
    this.props.dispatch({
      type: 'bookings' + upper_form_type,
      id: values.id,
      client: values.client,
      jobRef: values.jobRef
    })

    this.props.dispatch({   // add/edit booking in the state
      type: 'bookings.' + this.form_type,
      id: values.id,
      client: values.client,
      jobRef: values.jobRef
    });

    this.props.dispatch(goBack()) // redirect to previous page
  }

}

// decorate the form component
const BookingEditForm = reduxForm({
  form: 'booking_edit',
  validate: function(values){
    const errors = {};
    if (!values.client){
      errors.client = 'Client name is required'
    }
    return errors;
  }
})(BookingEdit);

// export the connected class
function mapStateToProps (state, own_props){
  let form_data = {
    id: 0,
    client: '',
    jobRef: '',
  };
  for (const booking of state.bookings.list) {
    if (booking.id === Number(own_props.params.id)) {
      form_data = booking;
      break;
    }
  }
  return {
    initialValues: form_data
  }
}

export default connect(mapStateToProps)(BookingEditForm)