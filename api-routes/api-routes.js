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
    first_name = (req.user.first_name);
    last_name = (req.user.last_name);
    res.json({
	first_name: first_name,
	last_name: last_name,
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
router.post("/api/newstudentform", function(req,res) {
    console.log("adding new form");
    db.StudentForm.create({
        gpa: req.body.gpa,
	research_interest: req.body.interest,
        location: req.body.location,
        move: req.body.willingMover,
	achieve: req.body.achieve,
	duration: req.body.duration,
	career: req.body.career,
	hours_week: req.body.hours_week,
	university: req.body.university,
	university_switch: req.body.university_switch,
	year: req.body.year,
	major: req.body.major,
	resume: req.body.resume,
	cover_letter: req.body.cover_letter,
	uuid: req.body.uuid
    }).then(function(newStudentForm) {
	console.log("new form created");
	//userId = (newStudentForm[0]).toString();
	//studProf = (newStudentForm[0].studentOrProf);
	//console.log('this is userId: ' + userId);
	//console.log('this is studProf: ' + studProf);
	//res.json({
	  //  userId: userId,
	    //studProf: studProf
	//});
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

// save professor form
router.post("/api/newprofessorform", function(req,res) {
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
	console.log("new form created");
	//userId = (newProf.dataValues.id).toString();
	res.send('ok');
    }).catch(function(err) {
	console.log(err);
        res.json(err);
    });
});

router.get("/api/user", isAuthenticated, function(req, res) {
    console.log(req.body);
    db.User.findOne({
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


router.get("/api/studentform", isAuthenticated, function(req, res) {
    console.log('user req: ',req.user.id);
    db.StudentForm.findOne({
	where: {uuid: req.user.id}
    }).then(function(studForm) {
	console.log('found student form');
	console.log(studForm);
	//userId = (user[0].id).toString();
	//res.json({userId: userId});
	res.json(studForm);
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});

router.get("/api/professorform", isAuthenticated, function(req, res) {
    console.log('user req: ',req.user.id);
    db.ProfForm.findOne({
	where: {uuid: req.user.id}
    }).then(function(profForm) {
	console.log('found prof form');
	console.log(profForm);
	//userId = (user[0].id).toString();
	//res.json({userId: userId});
	res.json(profForm);
    }).catch(function(err) {
	console.log(err);
	res.send(err);
    });
});

module.exports = router;
