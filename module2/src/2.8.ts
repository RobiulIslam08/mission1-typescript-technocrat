{
	//Asynchronous typescript
	type Somthing = {somthing:string}
	const creatPromise = ():Promise<Somthing> =>{
		return new Promise<Somthing>((resolve, reject)=>{
			const data:Somthing = {somthing: 'something'};
			if(data) {
				resolve(data)
			}else{
				reject('failed to load data')
				console.log('ok')
			}
		})
	}
	//calling create function
	const showData = async ():Promise<Somthing> => {
		
			const data:Somthing = await creatPromise();
			// console.log(data)
			return data
		
	}

	showData()

	//data fetching example two
	type Todo = {
		userId:number;
		id:number;
		title:string;
		completed:boolean
	}
	const getTodo =async():Promise<Todo> =>{
	
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
			const data = await response.json()
			console.log(data)
			return data
		
		
	}
	getTodo()








	//
}