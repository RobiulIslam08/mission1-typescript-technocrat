"use strict";
//normal funciton
//arrow function
//normal funciton
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
add(2, 2);
function add1(num1, num2, num3) {
    console.log(num1 + num2 + num3);
    return num1 + num2;
}
add1(2, 2, 'fsdkf');
//arrow function
const addArrow = (num1, num2) => num1 + num1;
//method
const poorUser = {
    name: 'Rabiul',
    balance: 0,
    addBalance(balance) {
        return `this is my balance ${this.balance + balance}`;
    }
};
poorUser.addBalance(20);
const numberArray = [5, 6, 7, 7];
const newArray = numberArray.map((element) => element * element);
console.log(newArray);
