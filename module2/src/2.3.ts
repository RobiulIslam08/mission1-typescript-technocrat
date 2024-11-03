{
	//Generics Type
	//generics structure and declage
	type GeniricsArray <T> = Array<T>
	
	const numberArray: GeniricsArray<number> = [322,142,22]
	const stringArray: GeniricsArray<string> = ['kf', 'robi', 'rahad']
	const booleanArray: GeniricsArray<boolean> = [true, false, true]

	//for object 
	const user: GeniricsArray<{ name: string; age: number }> = [
		{
			name: 'robi',
			age: 43,
		},
		{
			name: 'rahad',
			age: 44,
		}
	];

	// tuple 
	type Manus<T, Q> = [T, Q]
	const cuple: Manus<string, string> = ['mr.x', 'missesY']
	console.log(cuple)











	//
}