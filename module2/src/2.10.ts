{
	//mapped type
	// aita sadoron map
	const arrayOfNumber = [1,56,77,77,34,34];
	const arrayOfString = arrayOfNumber.map(number => number.toString())
	console.log(arrayOfString)

	// now use mappted type
	type AreaNumber = {
		height: number;
		width: number;
	}
	type Height = AreaNumber['height'] // look up type
	// aivabe akoi kaj bar bar na kore dynamic vabe mapped er maddome type change kora jabe
	// type AreaString = {
	// 	height: string;
	// 	width: string
	// }


	//stpe = 2

	// type AreaString = {
	// 	// [key in "heigth" | "width"] : string // manually
	// 	[key in keyof AreaNumber] : string // dynamic  

	// 	// structure hobe aita. 
	// 	// type AreaString = {
	// 	// 	height: string;
	// 	// 	width: string;
	// 	// }
	// }


	// step = 3 with generic with dynamic 
	type AreaString<T> = { // T = height:string; width:number
		[key in keyof T ] : T[key] // T[key] = 1. T['width]  // like look up map
											// 2. T['string']	
		
	}
	const area1:AreaString<{height:string; width:number}> =  {
		height: '30',
		width: 10
	}








	//
}