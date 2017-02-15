import axios from 'axios';
export const BOOKINGS_MODAL_STRIKES_HIDE = 'BOOKINGS_MODAL_STRIKES_HIDE';
export const BOOKINGS_MODAL_STRIKES_SHOW = 'BOOKINGS_MODAL_STRIKES_SHOW';
export const BOOKINGS_STRIKES_EDIT       = 'BOOKINGS_STATUS_EDIT';
export const BOOKINGS_MODAL_STATUS_HIDE  = 'BOOKINGS_MODAL_STATUS_HIDE';
export const BOOKINGS_MODAL_STATUS_SHOW  = 'BOOKINGS_MODAL_STATUS_SHOW';
export const BOOKINGS_STATUS_EDIT        = 'BOOKINGS_STATUS_EDIT';
export const BOOKINGS_MODAL_CHARGES_HIDE = 'BOOKINGS_MODAL_CHARGES_HIDE';
export const BOOKINGS_MODAL_CHARGES_SHOW = 'BOOKINGS_MODAL_CHARGES_SHOW';
export const BOOKINGS_CHARGES_EDIT       = 'BOOKINGS_CHARGES_EDIT';
export const BOOKINGS_MODAL_BOOKING_REQUEST_HIDE = 'BOOKINGS_MODAL_BOOKING_REQUEST_HIDE';
export const BOOKINGS_MODAL_BOOKING_REQUEST_SHOW = 'BOOKINGS_MODAL_BOOKING_REQUEST_SHOW';
export const BOOKINGS_BOOKING_REQUEST_EDIT       = 'BOOKINGS_BOOKING_REQUEST_EDIT';
export const CHANGE_STATUS       = 'CHANGE_STATUS';
export const TEXT_CHANGE       = 'TEXT_CHANGE';

export function changeStatus(event){
    // console.log('change status action call - event')
    // console.log(event)
    const id = Number(event.target.dataset.id);
    const status = event.target.dataset.status;
    // const strikes = event.target.dataset.strikes
    // console.log('change status  action call - booking status')
    // console.log(status)
    // console.log('strikes action call - booking strikes')
    // console.log(strikes)
    return {
        type: 'CHANGE_STATUS',
        payload: { id, status }
    }
}

export function textChange(event){
    // console.log('change text action call - event')
    // console.log(event)
    const id = Number(event.target.dataset.id);
    const field = event.target.dataset.field;
    const text = event.target.value;
    // console.log('change text  action call - booking status')
    // console.log(text)
    // console.log('strikes action call - booking strikes')
    // console.log(strikes)
    return {
        type: 'TEXT_CHANGE',
        payload: { id, text, field }
    }
}

export function modalStrikesShow(event){
    console.log('strikes action call - event')
    console.log(event)
    const booking_id = Number(event.target.dataset.id);
    const strikes = event.target.dataset.strikes
    console.log('strikes action call - booking id')
    console.log(booking_id)
    console.log('strikes action call - booking strikes')
    console.log(strikes)
    return {
        type: 'BOOKINGS_MODAL_STRIKES_SHOW',
        payload: {
            show: true,
            id: booking_id,
            strikes
        }
    }
}



// ----------------------------------------------------------

// Remember youhave a bunch of pre-written date handling 
// action stuff when youget to ordering the table!


// export const FETCH_DATA = 'FETCH_DATA';
// export const THIS_WEEK = 'THIS_WEEK';
// export const CHANGE_WEEK = 'CHANGE_WEEK';



// const ROOT_URL = 'https://assessments.bzzhr.net/calendar/calendar/?overlaps=false&since='
// const currDate  = WeekStartDate()
// let week

