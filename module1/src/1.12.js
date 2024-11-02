"use strict";
{
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('there is nothing to search');
        }
    };
    // searchName(null)
    //unknown type
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value == 'number') {
            const covertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${covertedSpeed}`);
        }
        if (typeof value == 'string') {
            const [result, unit] = value.split(' ');
            const covertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(covertedSpeed);
        }
    };
    getSpeedInMeterPerSecond('1000 kmh');
    //never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('error hoise bhai');
    console.log('module complete');
}
