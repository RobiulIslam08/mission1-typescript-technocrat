{
	//type guard
	// typeof => type guard
	type Alphaneumaric  = string | number // organize vabe korara jonno
	const add = (param1:Alphaneumaric, param2:Alphaneumaric) => {
		if(typeof param1 == 'number'  && typeof param2 == 'number'){
			return param1 + param2
		}else{
			return param1.toString() + param2.toString()
		}
	}
	const result1 = add(55,'4')
	const result2 = add(55,55)
	console.log(result1)
	
    // type guard => in guard
	type NormalUser = {
		name:string;
		
	}
	type AdminUser = {
		name: string;
		role:string;
	}
	const getUser = (user: NormalUser | AdminUser) => {
		// user.name  => aita access kora jabe
		// user.role  => aita access kora jabe nah . role access korar jonno in use korte hobe. 
		if('role' in user){
			console.log(`my name is ${user.name} and my role is ${user.role}`)
		}else{
			//console.log(`my name is ${user.name} and my role is ${user.role}`) => aikhane role access korte parbe nah
			console.log('my name is' + user.name)
		}
	}
	const normalUser: NormalUser = {
		name: ' robi',
		
	}
	const adminlUser: AdminUser = {
		name: ' rahad',
		role: 'admin'
	}
	getUser(normalUser)
	getUser(adminlUser)









	//
}