import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const THIS_WEEK = 'THIS_WEEK';
export const CHANGE_WEEK = 'CHANGE_WEEK';
import { WeekStartDate,  ChangeDate } from '../components/date_handlers'



const ROOT_URL = 'https://assessments.bzzhr.net/calendar/calendar/?overlaps=false&since='
const currDate  = WeekStartDate()
let week

export function thisWeek() { // find current date and then set the inital APi pull to this week

    let currDate = WeekStartDate()
    let start    = currDate.substring(0, 10)
    let end      = ChangeDate(currDate, 7).substring(0, 10)
    week         = `${start}T00%3A00%3A00Z&before=${end}T00%3A00%3A00Z`

    return {
        type: 'THIS_WEEK',
        payload: currDate
    }
}

export function changeWeek(newWeek, currDate, cb) {  // change week forrwards/backwards and change API pull accordingly

    let newDate = ChangeDate(currDate, newWeek)
    let start   = newDate.substring(0, 10)
    let end     = ChangeDate(newDate, 7).substring(0, 10)
    week        = `${start}T00%3A00%3A00Z&before=${end}T00%3A00%3A00Z`
    cb()

    return {
        type: CHANGE_WEEK,
        payload: newDate
    }
}



export function fetchData() {   // get event data from buxxhire API
    const request = axios.get(ROOT_URL + week);
    return {
        type: 'FETCH_DATA',
        payload: request
    };
}