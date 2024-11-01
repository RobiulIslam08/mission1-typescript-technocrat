{
	const isAuthenticated = '' 
	const result1 = isAuthenticated ?? "guest"
	const result2 = isAuthenticated? isAuthenticated: "guest"
	console.log({result1},{result2})

	type User = {
		fullName: string;
		address: {
			parmanentAddress: string;
			presentAdderes?: string;
		}
	}
	const user: User = {
		fullName: 'Rabiul Islam',
		address: {
			parmanentAddress: 'sherpur',
		}
	}
	const presentAdderes = user.address.presentAdderes ?? 'tar present address nai re bhai'
	console.log(presentAdderes)
}