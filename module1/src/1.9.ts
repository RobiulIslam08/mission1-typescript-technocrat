// Type alias

//for object 
type Student = {
	name:string;
	age:number;
	contactN0?: string
}
const student1 = {
	name: "robi",
	age: 21,
	
}
const student2 = {
	name: "rahad",
	age: 12,

}

console.log(student1)

//for string
type UserName = string;
const userName: UserName = 'robi'

// for boolean 
type IsLoading = boolean;
const isLoading: IsLoading = true

// for function
type Add = (num1: number, num2:number) => number
//for arrow function
const add: Add = (num1 , num2)=> {
	return num1 + num2
}
//for normal function
const add2:Add = function(num1, num2){
	return num1 +num2
}