{
	//conditional
	type a1 = number;
	type b1 = null;
	type x = a1 extends number? true : false // conditional type
	type y = a1 extends null ? true: b1 extends null ? true: any // nested conditional type


	//with generic
	type Sheikh = {
		 bike: string;
		 car: string;
		 ship: string;
	}
	type checkVicle<T> =  T extends keyof Sheikh? true : false
	type HashVihicle = checkVicle<'bike'>
	








	//
}