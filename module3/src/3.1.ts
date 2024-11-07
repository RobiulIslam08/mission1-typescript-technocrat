//class
class Animal {
	
	constructor(public name:string, public spacies:string, public sound:string){
	
	}
	makeSound() {
		console.log(`The ${this.name} says ${this.sound}`)
	}
}

const cat = new Animal('kiti', ' cat', ' mew mew')
cat.makeSound()