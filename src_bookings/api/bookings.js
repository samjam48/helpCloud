import demoBookings from './demo_bookings'

export default class ApiBookings {

    static getList(action){
        const timeout = 1000 // 1 sec delay for the ApiBookings
        return new Promise(resolve => {
            setTimeout(() => {
                // let bookings = demoBookings
                let bookings = [];
                for (let x = 1; x <= 28; x++) {
                    bookings.push({
                        id: x,
                        client: 'SushiMe' + x,
                        jobRef: 'JR' + x
                    })
                }
                resolve(bookings);
            }, timeout)
        })
    }

    static add (action){
        // call some api url
    }
    static edit (action){
        // call some api url

        // PUT to update
    }
    static delete (action){
        // call some api url
    }
}