import React, {Component} from 'react'

export function Header() {

    return(
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
    );

}




export function CalHeader(date){
    let dayNum = []
    for(let i=0; i<7; i++){
        let day = ChangeDate(date, i)
        day = new Date(day)
        dayNum.push( day.getDate() )
    }



//     return(
//         <TableHeaderColumn className="colHeader" headerAlign='center' key={day} dataField={day} width='10%' > 
//             <pre>{days[day]}</pre> 
//         </TableHeaderColumn> 
//     )})
// } 

    // return(
    //     <TableHeaderColumn className="colHeader" headerAlign='center' key={day} dataField={day} width='10%' > 
    //         <pre>{days[day]}</pre> 
    //     </TableHeaderColumn> 
    // )})