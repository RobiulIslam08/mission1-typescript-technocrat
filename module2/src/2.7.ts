{
	//2-7 Constraint using key of
	type Vehical = {
		bike:string,
		car:string,
		ship:string,
	}
	//aita amra keof use kore reusabel babe sohojei use korte pari 
	//er mane jekono akta ditei hobe
	type Owner = 'bike' | 'car' | 'ship' //manually
	
	//aije aikhane use kore fellam . oporer ta r aita same
	//ar maneu jekono akta ditei hobe
	type Owner2 = keyof Vehical

	const person:Owner = 'bike'
	const perso2:Owner2 = 'bike'


//example two
	const getPropertyValue =<X, Y extends keyof X> (obj:X, key:Y) => {  // Y extends keyof X= y er key er type ta je hobe aita must X er vitor thakte hobe. name | email | address thaktei hobe
		return obj[key] // user.name 
	}

	const user = {
		name:'robi', 
		email: 'robi@gmail.com',
		address: 'sherpur'
	}
	const result = getPropertyValue(user, 'name')
	//aita error dibe. cause nameee নামে কোন key নেই
	const result2 = getPropertyValue(user, 'namee')








	//
}