var db  = require('../we-search-db/models');
var express = require('express');
var router  = express.Router();
var session = require("express-session");
var passport = require("../we-search-db/config/passport");
var isAuthenticated = require("../we-search-db/config/middleware/isAuthenticated");
var userId;


router.get('/api/test', function(req, res){
    res.json('it works');
});
// login authenticate
router.post("/login", passport.authenticate("local"), function(req, res) {
    userId = (req.user.id);
    res.send('ok');
});

// user signout
router.get("/sign-out", function(req,res) {
    req.logout();
    res.redirect("/");
});

// register a new student
router.post("/signup", function(req,res) {
	console.log("creating new user", req.body);
    db.User.findOrCreate({
	where: {email: req.body.email}, defaults:
	{
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password,
		studentOrProf: req.body.studentOrProf
		
	}
	    }).then(function(newStudent) {
	    	console.log("new user created");
		//userId = (newStudent.dataValues.id).toString();
		//res.send(userId);
	    }).catch(function(err) {
	    	console.log(err);
		res.json(err);
	    });
	});


// save student form
router.post("/api/studentform", isAuthenticated, function(req,res) {
    db.StudentForm.create({
        gpa: req.body.gpa,
	research_interest: req.body.reasearch_interest,
        live: req.body.live,
        move: req.body.move,
	achieve: req.body.achieve,
	stay_here: req.body.stay_here,
	career: req.body.career,
	time_week: req.body.time_week,
	university: req.body.university,
		university_switch: req.body.university_switch,
		year: req.body.year,
		major: req.body.major,
	resume: req.body.resume,
	cover_letter: req.body.cover_letter,
	uuid: req.body.uuid
    }).then(function(newStudentForm) {
	//userId = (new.dataValues.id).toString();
	//res.send(userId);
    }).catch(function(err) {
        res.json(err);
    });
});

// save professor form
router.post("/api/professorform", isAuthenticated, function(req,res) {
    db.ProfForm.create({
        min_gpa: req.body.min_gpa,
	research_interest: req.body.reasearch_interest,
        live: req.body.live,
	student_achieve: req.body.student_achieve,
	long_distance: req.body.long_distance,
	career: req.body.career,
	look_student: req.body.look_student,
	hours_week: req.body.hours_week,
	available: req.body.available,
	university: req.body.university,
	    duration: req.body.duration,
	    field: req.body.field,
	cv: req.body.cv,
	uuid: req.body.uuid
    }).then(function(newProfForm) {
	//userId = (newProf.dataValues.id).toString();
	//res.send(userId);
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;
