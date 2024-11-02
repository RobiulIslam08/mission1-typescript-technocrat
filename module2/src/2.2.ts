{
// type alis  for object for intersaction
type User1 = {
	name:string;
	age:number
}

type UserWithRole1 = User1 & {
	role: string
}
const user1: UserWithRole1 = {
	name:'robi',
	age: 21,
	role: 'manage'
}

// interface extends others  like intersation
 interface User2 {
	name:string;
	age:number
 }
 interface UserWithRole2 extends User2 {
	role: string
 }
 const user2: UserWithRole2 = {
	name:'robi',
	age: 21,
	role: 'manage'
}


//array for type alias and iterface
//type alias
type Roll1 = number[]
const roll1: Roll1 = [43,43,44]

//interface
interface Roll2 {
	[index:number]:number
}

const roll2: Roll2 = [43,43,44]



//funciton for type alias and interface
// type alias
type Add1 = (num1:number, num2:number)  => number
const add:Add1 =(num1, num2)  => {
	return num1 + num2
}

// interface 
interface Add2 {
	(num3:number, num4:number):number
}

//
}