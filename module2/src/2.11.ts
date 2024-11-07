{
	//Utility
	// Pick = কোন কিছু তুলে নিয়ে আসা
	type Person = {
		name: string;
		email:string;
		contactInfo: string;
		phone:number;
		gender?: string;
	}
	type Name = Pick<Person, "name">// shudu name asbe
	type NameAge = Pick<Person, "name"| "phone"> // duita chole asbe


	//Omit = বাদ দেওয়া
	type ContactInfo = Omit<Person, "name"| "email" | "gender" | "phone"> // Person থেকে সব এখানের সব গুলো বাদ দিয়ে শুধু contactInfo টা রেখে দিবে

	// Required = একাটা টাইপের সব property গুলো কে যদি required করতে চায় । যেগুলো optional থাকেবে সেগুলাও required হবে। 
	type PersonRequired = Required<Person>

	// Pertial ==  সবগুলোকে ধরে otional করে দিবে
	type PersonPartial = Partial<Person>

	//Readonly = শুধু পড়া যাবে । কিন্তু কোন কিছু change করা যাবে নাহ
	type PersonReadonly = Readonly<Person>

	//Record
	//Record ==  আমরা type এ যদি দুইটা property থাকে কিন্তু আমরা যদি আরো কিছু add করতে চায় তাহলে পারবোনা error দিবে । Record এর মাধ্যমে আমরা dynamic ভাবে আরো property add করতে পারবো

	// type MyObj = {
	// 	name:string;
	// 	email:string;
	// }
	

	// ai type declare korar fole amra akadik property add korte parbo kono error dibe nah
	type MyObj = Record<string, string> // 1st = key (string = obj er somoy, array er somoy numbe), 2nd = value. ; tobe akane jehetu 2nd a stirng deoa hoise tai value jodi number deoa hoi tahole error asbe. r aita solve kore hoise niche generic er maddome. EmptyObj er maddome dekhano holo
	type EmptyObj<> = {}
	const Faruk: MyObj = {
		name: "Faruk",
		email: 'faruk@gmail.',
		gender: 'male' //1st er example onusare. aita add korte parbonah errro dibe. aita somadan korte pari Record Utiltiy er maddome
	}
	













	//
}