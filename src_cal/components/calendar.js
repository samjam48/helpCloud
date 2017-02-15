import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { fetchData, thisWeek, changeWeek } from '../actions/index';
import { getMonthYear } from './date_handlers'
import { CalHeader } from './cal_header';
import { CalRows } from './cal_rows';
import { CalEvents } from './cal_events';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        let Events =  CalEvents(this.props.Events)
        this.state = { Events, Date: this.props.Date }
    }

    componentWillReceiveProps(nextProps){    // update state with new data
        let Events =  CalEvents(nextProps.Events)
        this.setState({ Events, Date: nextProps.Date })
    }

    handleClick(event){                     // change week forwards/backwards and then pull data as a callback
        let change = (event.target.id == "nextWeek") ? 7 : -7;
        
        this.props.dispatch( changeWeek( change,
                                         this.state.Date,
                                         () =>  this.props.dispatch( fetchData() )
                                       ))
    }



    render() {
        let rows = CalRows()  // pull new blank set of rows

        this.state.Events.map((event) => {    // map any events from the data onto rows
            let end = (event.begin.dayNum != event.final.dayNum) ? 24 : event.final.hours;
            for(let i=event.begin.hours; i<end; i++) {
                rows[i][event.begin.dayNum] = event.label 
            }
        })

        return (
            <div>
                <h2>{ getMonthYear(this.state.Date) }</h2>

                <Button id="lastWeek" onClick={this.handleClick.bind(this)} bsStyle="info">Last</Button>
                <Button id="nextWeek" onClick={this.handleClick.bind(this)} bsStyle="info">Next</Button>
                
                <BootstrapTable className="calTable" data={rows} striped hover >
                    <TableHeaderColumn className="colHeader" headerAlign='center' isKey dataField='time' width='10%'>Hrs</TableHeaderColumn>
                    { CalHeader(this.state.Date) }
                </BootstrapTable>

            </div>
        );
    }
}


function mapStateToProps(state=state) {
    return { Events: state.data, Date: state.week };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData, thisWeek, dispatch }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)