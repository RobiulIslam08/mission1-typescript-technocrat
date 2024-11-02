"use strict";
{
    const kgToGm = (value) => {
        if (typeof value == 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }
        if (typeof value == 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm('1000');
    console.log(result1);
    console.log(result2);
}
