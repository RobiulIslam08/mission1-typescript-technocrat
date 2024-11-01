//spread oparator for array
const digit1:number[] = [12, 34,5,56,6,677,77]
const digit2:number[] = [15, 334,55,566,76,7677]
digit1.push(...digit2)
console.log(digit1)


//spread oparator for object
const mentorName = {
	nextjs: 'tonmoy',
	redux: 'mir'
}
const schoolName = {
	jsc: 'PA',
	ssc: "RIMA"
}
const mentorAndSchool = { 
	...mentorName,
	...schoolName
}
console.log(mentorAndSchool)


// res opartor 
const greetFriends = (...friedns:string[]) => {
	friedns.forEach((friend)=> console.log(`hello ${friend}`))
}
greetFriends('robi', 'rahad', 'roni')