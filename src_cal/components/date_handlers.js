

Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};

Date.prototype.getDayNum = function(){ // Add method to Date so sunday equates to a 7 not a 0. Now weeks start on a Monday
    let day = this.getDay()
    if(day == 0) day = 7
    return day;
};


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