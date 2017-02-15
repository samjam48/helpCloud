import React from 'react'
import { CalEvents } from './cal_events';
import { ChangeDate } from './date_handlers'


export function CalHeader(date){
    let dayNum = []
    for(let i=0; i<7; i++){
        let day = ChangeDate(date, i)
        day = new Date(day)
        dayNum.push( day.getDate() )
    }

// Important
// don't change formatting of 'days' object INCLUDING INDENTATION
// (or table headers will screw up!)
let days = {
1 : `Mon
${dayNum[0]}`,
2 : `Tue
${dayNum[1]}`,
3 : `Wed
${dayNum[2]}`,
4 : `Thu
${dayNum[3]}`,
5 : `Fri
${dayNum[4]}`,
6 : `Sat
${dayNum[5]}`,
7 : `Sun
${dayNum[6]}`
}


    return Object.keys(days).map( (day) => {return(
                                                <TableHeaderColumn className="colHeader" headerAlign='center' key={day} dataField={day} width='10%' > 
                                                    <pre>{days[day]}</pre> 
                                                </TableHeaderColumn> 
                                            )})
} 