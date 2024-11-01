{
// Union types
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

//Intersection types
type FrontedDeveloper = {
	skills: string[];
	designation1: string;
}
type BackedDeveloper = {
	skills: string[];
	designation2: string;
}

type FullstackDeveloperr = FrontedDeveloper & BackedDeveloper
const fullStackDeveloper: FullstackDeveloperr = {
	skills: ['html', 'css', 'js', 'node js'],
	designation1: 'frontend developer',
	designation2: 'backend developer'
}


}