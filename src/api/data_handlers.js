

export const statusText = (status) => {
    let refs = '';
    switch (status) {
        case "OK":
            return "Confirmed / Complete";
        case "CA":
            return "Client Cancelled";
        case "FC":
            return "FL Cancelled / No Show";
        case "UN":
            return "Unsatisfied";
    }
    return refs;
}

export const invoicesRefs = (invoices) => {
    let refs = '';
    for(let i=0; i<invoices.length; i++) {
        refs += invoices[i].reference_number;
        if(i < invoices.length - 1) refs += ', '
    }
    return refs;
}

export const extraCharges = (charges) => {
    let chargesNames = '';
    for(let i=0; i<charges.length; i++) {
        chargesNames += charges[i].label
        if(i < charges.length - 1) chargesNames += ', '
    }
    return chargesNames;
}

export const chargesTotal = (person, charges) => {
    let total = 0;
    if(typeof charges != "undefined"){
        for(let i=0; i<charges.length; i++) {
            person == 'client'? 
                total += Number(charges[i].client_amount) :
                total += Number(charges[i].freelancer_amount) 
        }
    }
    return total.toFixed(2);
}

export const jobHours = (end, start) => {
    start = new Date(start);
    end   = new Date(end);
    return Number(end.getTime() - start.getTime()) / 3600000;
}

export const strikes = (strikes) => {
    let strikeDeets = '';
    for(let i=0; i<strikes.length; i++) {
        strikeDeets += strikes[i].reason + ', ';
        strikeDeets += getDate(strikes[i].created);
        if(i < strikes.length - 1) strikeDeets += '; '
    }
    return strikeDeets;
}

// ----------- Date helpers ---------- //

Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};

Date.prototype.getDayNum = function(){ // Add method to Date so sunday equates to a 7 not a 0. Now weeks start on a Monday
    let day = this.getDay();
    if(day == 0) day = 7;
    return day;
};

export const getHour = (date) => {
    date = new Date(date);
    return date.toTimeString().substring(0,5);
}

// export const getFullDate= (date) => {
//     date = new Date(date);
//     return date.toDateString();
// }

export const daylightSaving= (date) => {
    if( date.slice(19,20) == 'z' ) 
    return date.toDateString();
}

export const getDate= (date) => {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return day+"/"+month+"/"+year;
}
// var day = date.getDate();
// console.log(day);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth()+1;
// console.log(month);

// var dateStr = month+"/"+day+"/"+year;
// console.log(dateStr)

export const ChangeDate = (date, change) => {
  date = new Date(date)
  date.setDate(date.getDate()+change)
  date = date.toISOString()
  return date
}

export const WeekStartDate = () =>{
    var currDate = new Date;
    var firstDayOfWeek = new Date(currDate.setDate(currDate.getDate() - currDate.getDayNum()+1));
    return firstDayOfWeek.toISOString()
}

export const getMonthYear = (date) => {
    // date = new Date(date)
    // return `${date.getMonth()}, ${date.getYear()}`
    var arr = date.split("-");
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return months[arr[1] - 1] + ', ' + arr[0]
}