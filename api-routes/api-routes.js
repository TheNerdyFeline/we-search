var db  = require('../we-search-db/models');
var express = require('express');
var router  = express.Router();
var session = require("express-session");
var passport = require("../we-search-db/config/passport");
var isAuthenticated = require("../we-search-db/config/middleware/isAuthenticated");
var userId, studProf;


router.get('/api/test', function(req, res){
    res.json('it works');
});
// login authenticate
router.post("/login", passport.authenticate("local"), function(req, res) {
    userId = (req.user.id).toString();
    studProf = (req.user.studentOrProf);
    console.log('this is userId: ' + userId);
    console.log('this is studProf: ' + studProf);
    res.json({
	userId: userId,
	studProf: studProf
    });
});

// user signout
router.get("/sign-out", function(req,res) {
    req.logout();
});

// register a new user
router.post("/signup", function(req,res) {
    db.User.findOrCreate({
	where: {email: req.body.email}, defaults:
	{
	    first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    password: req.body.password,
	    studentOrProf: req.body.studentOrProf   
	}
    }).then(function(newUser) {
	userId = (newUser[0].id).toString();
	studProf = (newUser[0].studentOrProf);
	//console.log('this is userId: ' + userId);
	//console.log('this is studProf: ' + studProf);
	res.json({
	    userId: userId,
	    studProf: studProf
	});
	// res.send('ok');
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});


// save student form
router.post("/api/studentform", isAuthenticated, function(req,res) {
    db.StudentForm.create({
        gpa: req.body.gpa,
	research_interest: req.body.interest,
        location: req.body.location,
        move: req.body.willingMover,
	achieve: req.body.achieve,
	duration: req.body.stay_here,
	career: req.body.career,
	hours_week: req.body.commitment,
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
        min_gpa: req.body.gpa,
	research_interest: req.body.interest,
        location: req.body.location,
	student_achieve: req.body.achieve,
	long_distance: req.body.duration,
	career: req.body.career,
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

router.get("/api/student", isAuthenticated, function(req, res) {
    db.Student.findOne({
	where: {email: req.body.email} 
    }).then(function(user) {
	console.log(user);
	//userId = (newUser.dataValues.id).toString();
	res.send(user);
	//res.send('ok');
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});

module.exports = router;
