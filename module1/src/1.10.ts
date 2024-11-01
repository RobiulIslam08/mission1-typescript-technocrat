{
//1st
type FrontendDeveloper = "fakibajdeveloper" | "frontendDeveloper"
type FullstackDeveloper = 'fakibajdeveloper' | "fullstackDeveloper"
const frontednDeveloper: FrontendDeveloper =  "fakibajdeveloper"

//2nd
type Developer  = FrontendDeveloper | FullstackDeveloper
const newDeveloper:Developer  = "fakibajdeveloper"

//for object
type User = {
	name: string;
	blood: "O+" | "AB+"| "B+"
}
const user:User = {
	name: 'robi',
	blood: "AB+"
}



}