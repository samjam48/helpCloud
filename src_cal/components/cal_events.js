import React from 'react'
import { CalRows } from './cal_rows';


// add useful date info to event objects to make displaying easier


export const CalEvents = (data) => {
    return data.map((event) => {
        event.begin = ConvertDate(event.start)
        event.final = ConvertDate(event.end)
        return event
    })
}


const ConvertDate = (date) => {
    date = new Date(date)
    return {
      hours: date.getHours(),
      dayNum: date.getDayNum()
    }
}


    //   Future Functionality to add in 'ConvertDate'
    //   Feature where user clicks on event and can see data more data on event

    //       dayName: date.getDayOfWeek(),
    //       day: date.getDate(),
    //       date: date,
    //       month: date.getMonth(),
    //       year: date.getYear()