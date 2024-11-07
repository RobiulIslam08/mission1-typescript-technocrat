{
	//Inheritance
	class Person {
		name:string;
		age:number;
		address:string;
		constructor(name:string, age:number, address:string){
			this.name = name;
			this.age = age;
			this.address = address;
		}
		getSleep(numOfHours:number){
			console.log(`${this.name} will sleep for ${numOfHours}`)
		}
	}

	class Student extends Person {
		constructor(name:string, age:number, address:string){
			super(name, age, address)
		}

	}
	class Teacher extends Person {
		designation: string
		constructor(name:string, age:number, address:string, designation:string){
			super(name, age, address)
			this.designation = designation
		}
		takeClass(numOfClass:number) {
			console.log(` ${this.name} given class ${numOfClass}`)
		}
	}

	const alifSir = new Teacher('Alif Sir', 55, 'khorompur', ' Professor')
	alifSir.getSleep(6)
	alifSir.takeClass(25)














	//
}