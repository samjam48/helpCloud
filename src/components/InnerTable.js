import React from 'react';
import { Table } from 'react-bootstrap';
import { getDate } from '../api/data_handlers';

import EditText from './form_fields/EditText';

{/*<EditText booking={booking} unit='£' type='number' field="client_pay_per_hour" />*/}

export default class InnerTable extends React.Component {


    render(){
        const field = this.props.field
        const id = this.props.id
        console.log(this.props)
        console.log(this.props.array)

        return(                        
            <Table className="innerTable" >
                <tbody>
                    {this.props.array.map((item, i) => {
                            if(field == 'invoices' || field == 'payments'){
                                return(
                                    <tr key={i}>
                                        <td>{item.reference_number}</td>
                                        <td>£{item.amount}</td>
                                    </tr>
                                )
                            }
                            if(field == 'charges'){
                                return(
                                    <tr key={i} style={{ 'min-width': '220px' }}>
                                        <td>{item.label}</td>
                                        <td>£{item.client_amount}</td>
                                    </tr>
                                )
                            }

                            if(field == 'strikes'){
                                return(
                                    <tr key={i}>
                                        <td>{item.reason}</td>
                                        <td>{getDate(item.created)}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table >
        )
    }
}




// 