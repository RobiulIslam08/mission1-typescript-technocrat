{
	//generic Interface
	interface Developer <T, Y=null> {
		name:string,
		computer: {
			model:string;
			price:number
		},
		smartWatch : T;
		bike?: Y
	}
	const poorDeveloper: Developer<{model:string, price:number}> = {
		name:'robi',
		computer: {
			model: 'xly',
			price: 44444
		},
		smartWatch: {
			model: 'llll',
			price: 5555
		}
	}
	interface richWatch {model:string, price:number, sleepTrack:true}
	const richDeveloper: Developer<richWatch> = {
		name:'robi',
		computer: {
			model: 'xly',
			price: 44444
		},
		smartWatch: {
			model: 'llll',
			price: 5555,
			sleepTrack: true
		}
	}





	//
}