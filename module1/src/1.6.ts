//normal funciton
//arrow function

//normal funciton
function add(num1:number, num2:number):number{ // শুধু number ব্যবাহর করতে হব
	console.log(num1 + num2)
	return num1+ num2
}
add(2,2)
function add1(num1:number, num2:number, num3:string):number|string{ // string  ডাটা টাইপ ব্যবহার করা যাবে
	console.log(num1 + num2 + num3)
	return num1+ num2
}
add1(2,2, 'fsdkf')

//arrow function

const addArrow = (num1:number, num2:number):number => num1 + num1

//method
const poorUser = {
	name: 'Rabiul',
	balance: 0,
	addBalance(balance:number):string{
		return `this is my balance ${this.balance + balance}`
	}
}
poorUser.addBalance(20)

const numberArray:number[] = [5,6,7,7]
const newArray:number[] = numberArray.map((element:number)=> element * element)
console.log(newArray)