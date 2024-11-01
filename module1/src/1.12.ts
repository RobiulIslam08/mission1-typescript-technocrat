{
	//nullable type
	const searchName = (value:string | null) =>{
		if(value){
			console.log('searching')
		}else{
			console.log('there is nothing to search')
		}

	}
	// searchName(null)

	//unknown type
	const getSpeedInMeterPerSecond = (value:unknown) =>{
		if(typeof value == 'number'){
			const covertedSpeed = (value * 1000) / 3600
			console.log(`the speed is ${covertedSpeed}`)
		}
		if(typeof value == 'string'){
			const [result, unit] = value.split(' ')
			const covertedSpeed = (parseFloat(result) * 1000) / 3600
			console.log(covertedSpeed)
		}

	}
	getSpeedInMeterPerSecond('1000 kmh')
}