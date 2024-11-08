{
	//3-7 Statics in OOP
	class Counter {
		static count:number = 0;
	    static Increment() {
			return Counter.count = Counter.count + 1;
		}
		static Decrement(){
			return Counter.count = Counter.count - 1;
		}
	}
	
	console.log(Counter.Increment()) // differant memonry
	console.log(Counter.Increment()) // differant memory












	//
}