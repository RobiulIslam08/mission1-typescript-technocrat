{
	// Type guard using instance of
	class Animal {
		name:string;
		spacies:string;
		constructor(name:string, spacies:string){
			this.name = name;
			this.spacies = spacies;
		}
		makeSound(){
			console.log(`I am making sound`)
		}
	}

	class Dog extends Animal {
		constructor(nmae:string, spacies:string){
			super(nmae, spacies)
		}
		makeBark(){
			console.log('I am sond barking')
		}
	}
	class Cat extends Animal {
		constructor(nmae:string, spacies:string){
			super(nmae, spacies)
		}
		makeMew(){
			console.log('I am sond mew')
		}
	}

	const isDog = (animal:Animal):animal is Dog =>{
		return animal instanceof Dog
	}
	const isCat = (animal:Animal): animal is Cat =>{
		return animal instanceof Cat
	}

	const getAnimal = (animal:Animal) =>{
		if(isDog(animal)){
			animal.makeBark() // shudu aikhanei access kora jabe 
		}else if (isCat(animal)) {
			animal.makeMew() // shudu aikhanei access kora jabe
		}else{
			animal.makeSound() 
		}
	}

	const dog = new Dog('kuttalig','dog' )
	const cat = new Cat('mini', 'cat')
	getAnimal(dog)
	getAnimal(cat)












	//
}