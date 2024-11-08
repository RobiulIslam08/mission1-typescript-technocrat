"use strict";
//class
class Animal {
    constructor(name, spacies, sound) {
        this.name = name;
        this.spacies = spacies;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const cat = new Animal('kiti', ' cat', ' mew mew');
cat.makeSound();
