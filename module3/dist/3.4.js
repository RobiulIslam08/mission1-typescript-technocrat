"use strict";
{
    // Type guard using instance of
    class Animal {
        constructor(name, spacies) {
            this.name = name;
            this.spacies = spacies;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    class Dog extends Animal {
        constructor(nmae, spacies) {
            super(nmae, spacies);
        }
        makeBark() {
            console.log('I am sond barking');
        }
    }
    class Cat extends Animal {
        constructor(nmae, spacies) {
            super(nmae, spacies);
        }
        makeMew() {
            console.log('I am sond mew');
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark(); // shudu aikhanei access kora jabe 
        }
        else if (isCat(animal)) {
            animal.makeMew(); // shudu aikhanei access kora jabe
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('kuttalig', 'dog');
    const cat = new Cat('mini', 'cat');
    getAnimal(dog);
    getAnimal(cat);
    //
}
