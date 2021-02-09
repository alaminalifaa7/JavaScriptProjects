'use strict';


const createBooking = function(flightNum, numPassengers, price){

    const booking ={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    booking.push(booking);
}