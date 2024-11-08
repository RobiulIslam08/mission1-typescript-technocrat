{
	//3-8 Polymorphism
	//example 1
	class Person {
		getSleep(){
			console.log('I am sleeping for 8 hours per day')
		} 
	}
	class Student {
		getSleep(){
			console.log('I am sleeping for 7 hours per day')
		}
	}
	class Developer {
		getSleep(){
			console.log('I am sleeping for 6 hours per day')
		}
	}

	const getSleepingHours = (param:Person) =>{
		param.getSleep()
	}
	const person = new Person()
	const student = new Student();
	const developer = new Developer()
	// getSleepingHours(person)
	// getSleepingHours(student)
	// getSleepingHours(developer)

	//example two
	class Shape {
		getArea():number{
			return 0
		}
	}

	//circle area
	class Circle extends Shape{
		radious:number;
		constructor(radious:number){
			super()
			this.radious = radious
		}
		getArea(): number {
			return Math.PI * this.radious * this.radious
		}
	}

	// rectangle area
	class Rectangle extends Shape {
		height:number;
		width:number;
		constructor(height:number, width:number){
			super()
			this.height = height;
			this.width = width;
		}
		getArea(): number {
			return this.height * this.width
		}
	}
	const shape = new Shape()
	const circle = new Circle(2);
	const rectangle = new Rectangle(5,5)

	const getShapeArea = (param: Shape) =>{
		console.log(param.getArea())
	}
	getShapeArea(shape)
	getShapeArea(circle)
	getShapeArea(rectangle)












	//
}