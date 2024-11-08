"use strict";
{
    //Inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(` ${this.name} given class ${numOfClass}`);
        }
    }
    const alifSir = new Teacher('Alif Sir', 55, 'khorompur', ' Professor');
    alifSir.getSleep(6);
    alifSir.takeClass(25);
    //
}
