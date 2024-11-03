{
	//Constraints 
	type mustAdd = {
		id: number;
		name: string;
		email: string;
		
	}
	const addCourseToStudent =<T extends mustAdd> (student:T) => {
		const course = 'next level webdevelopment course'
		return {
			...student, course
		}
	}
	const student1 = addCourseToStudent <{
		id: number;
		name: string;
		email: string;
		devType: string;
	}>({id:22,name:'rabiul', email:'robi@gmial.com', devType:'NLWD'})
	const student2 = addCourseToStudent({id:23,name:'rahad', email:'robi@gmial.com'})

	//aikhane error dibe
	const student3 = addCourseToStudent({emni: 'emni'})














	//
}