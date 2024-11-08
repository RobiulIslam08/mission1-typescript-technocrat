{
	//3-9 Abstraction in OOP
	//idea
	interface Vehicle1 {
		startEngine():void;
		stopEngine():void;
		move():void;
	} 
	//real implementation
	class Car implements Vehicle1{  
		startEngine(): void {
			console.log('I am starting the car engine')
		}
		stopEngine(): void {
			console.log('I am stop the car engine')
		}
		move(): void {
			console.log('I am move the car engine')
		}
		test():void{
			console.log('I am testing the car engine')
		}
	}
	const toyotaCar = new Car()
	toyotaCar.startEngine()

	//abstract class use
	//idea
	abstract class Car2 {  
		abstract startEngine(): void ;
		abstract stopEngine(): void ;
		abstract move(): void ;
		test():void{
			console.log('I am testing the car engine')
		}
	}

	//implementation
	class ToyotaCar extends Car2 {
		startEngine(): void {
			console.log('I am start the car engine')
		}
		stopEngine(): void {
			console.log('I am stop the car engine')
		}
		move(): void {
			console.log('I am move the car engine')
		}
	}
	const toyootaCar = new ToyotaCar()
	toyootaCar.startEngine()
	












	//

}