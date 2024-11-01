{
	const user = {
		contact: 1323090855,
		userName: {
			firstName: 'Robiul',
			lastName: 'Islam'
		},
		address: 'sherpur',
	
	}
	
	const {contact, userName:{firstName}} = user
	console.log(firstName, contact)

	//for array
	const friends = ['robi', 'rahad', 'sadat', 'mir', 'arif', ]
	//এখানে bestF=sadat , rest = [ 'mir', 'arif' ] , আর প্রথম দুইটা , use করে skip করা হয়েছে
	const [,,bestF,...rest] = friends
	console.log(bestF)
}