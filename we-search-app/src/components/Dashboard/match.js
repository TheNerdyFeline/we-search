import algorithmia from 'algorithmia';
let studentArr, professorArr, studentObj, professorObj;

const match = {
    sortStudents: (students) => {
	studentArr = students.map( (el) => {
	    studentObj = {};
	    studentObj.interests = el.research_interest.split(",");;
	    studentObj.gpa = el.gpa;
	    studentObj.university = el.university;
	    studentObj.year = el.year;

	    console.log(studentObj);
	    return studentObj;
	});
    },

    sortProfessors: (professors) => {
	professorArr = professors.map( (el) => {
	    professorObj = {};
	    professorObj.interests = el.research_interest.split(",");;
	    professorObj.gpa = el.min_gpa;
	    professorObj.university = el.university;
	    professorObj.year = el.min_year;

	    console.log(professorObj);
	    return professorObj;
	});
    },
    
    findMatch: (students, professors) => {
    let input = {
	"scoring_weights": {
	    "interests": 2,
	    "gpa": 0,
	    "university": 8,
	    "year": 3
	},
	"group1": [
	    students
	],
	"group2": [
	    professors
	]
    };


	var client = algorithmia("simkV7sJsw/on4nrPU7+S7cDyjR1");
	client.algo("algo://matching/DatingAlgorithm/0.1.2")
	    .pipe(input)
	    .then(function(response) {
		//console.log(response.get());
	    });
    }
};

export default match;
