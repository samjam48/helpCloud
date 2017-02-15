import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, FormGroup, FormControl, Col, Form } from 'react-bootstrap';
import { textChange } from '../../actions/index'; 



class EditText extends React.Component {
    constructor(props){
        super(props)

        this.state = { editable: false }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick(e) {
        if(e.target.id !== this.props.id + this.props.field) {
            this.setState({ editable: false })
        }
        else this.setState({ editable: true })
    }

    handleKeyPress(e){
        if(e.key == 'Enter') {
            this.setState({ editable: false })
        }
    }

    onInputChange(event) {
        console.log(event.target)
        this.props.textChange(event);
    }

    render(){
        const booking = this.props.booking
        let unit
        if(typeof this.props.unit != 'undefined') unit = <InputGroup.Addon>{this.props.unit}</InputGroup.Addon>
        let editable = this.state.editable;
        const cellId = this.props.id + this.props.field

        
        return(
            editable ? 
                (
                    <InputGroup id={cellId} onKeyPress={this.handleKeyPress.bind(this)} >
                        {unit}
                        <FormControl
                            id={cellId}
                            type={this.props.type}
                            defaultValue={booking[this.props.field]} 
                            data-id={this.props.id}
                            data-field={this.props.field}
                            onChange={this.onInputChange.bind(this)}
                            />
                    </InputGroup> 
                ) : (
                    <p id={cellId} style={{ 'text-align': 'center' }}  >
                        £{booking[this.props.field]}
                    </p>
                )
        )
    }
}

function mapStateToProps(state=state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ textChange, dispatch }, dispatch)
}


export default connect( mapStateToProps, mapDispatchToProps )(EditText)
