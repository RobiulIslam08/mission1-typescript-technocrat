{
	//function with generic

	//normal 
	const createArray = (param:string): string[] => {
		return [param]
	}

	//now learn generic= resuable function
	const createArrayWithGeneric = <T>(param:T): T[] => {
		return [param]
	}
	const res1 = createArrayWithGeneric<string>("banglades")
	const res2 = createArrayWithGeneric<number>(25)
	const res3 = createArrayWithGeneric<boolean>(true)
	type User = {name:string, role:number}
	const res4 = createArrayWithGeneric<User>({name:'robi', role: 100})


	//generic with tuple
	const genericWithTuple =<T,Q> (num1:T, num2:Q):[T,Q] => {
		return [num1, num2]

	}
	const res5 = genericWithTuple<number, number>(41,22)
	const res6 = genericWithTuple<number, string>(41,"hello")









	//
}