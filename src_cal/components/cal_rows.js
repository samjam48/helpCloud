    

let times = ['00:00', '01:00', '02:00','03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

function rowBuilder(hour) {
    return {
        time : hour,
        1  : '',
        2  : '',
        3  : '',
        4  : '',
        5  : '',
        6  : '',
        7  : ''
    }
}

const rowMap = times.map((hour) => rowBuilder(hour) )

    // deep clone array so that each page change all cell contents are refreshed.
export const CalRows = () => JSON.parse(JSON.stringify( rowMap ) )