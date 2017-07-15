var db  = require('../we-search-db/models');
var express = require('express');
var router  = express.Router();

// register a new student
router.post("/api/studentsignup", function(req,res) {
    db.User.findOne({
    where: {email: req.body.email}
  }).then(function(results) {
    if (results !== null) {
      res.json({
        duplicateUser: true
      });
    } else {
	db.User.create({
            first_name: req.body.firstname,
	    last_name: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
	    univsersity: req.body.university,
	    university_switch: req.body.university_switch,
	    year: req.body.year,
	    major: req.body.major
	}).then(function(newStudent) {
	    studentId = (newStudent.dataValues.id).toString();
	    res.send(studentId);
	}).catch(function(err) {
            res.json(err);
	});
    }
  });
});

// register new professor
router.post("/api/professorsignup", function(req,res) {
    db.User.findOne({
    where: {email: req.body.email}
  }).then(function(results) {
    if (results !== null) {
      res.json({
        duplicateUser: true
      });
    } else {
	db.User.create({
            first_name: req.body.firstname,
	    last_name: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
	    univsersity: req.body.university,
	    tenure: req.body.tenure,
	    field: req.body.field
	}).then(function(newProf) {
	    profId = (newProf.dataValues.id).toString();
	    res.send(profId);
	}).catch(function(err) {
            res.json(err);
	});
    }
  });
});

// save student form
router.post("/api/studentform", function(req,res) {
    db.User.create({
        gpa: req.body.gpa,
	research_interest: req.body.reasearch_interest,
        live: req.body.live,
        move: req.body.move,
	achieve: req.body.achieve,
	stay_here: req.body.stay_here,
	career: req.body.career,
	time_week: req.body.time_week,
	resume: req.body.resume,
	cover_letter: req.body.cover_letter,
	uuid: req.body.uuid
    }).then(function(newProf) {
	    profId = (newProf.dataValues.id).toString();
	res.send(profId);
    }).catch(function(err) {
        res.json(err);
	});
});

// save professor form
router.post("/api/professform", function(req,res) {
    db.User.create({
        gpa: req.body.gpa,
	research_interest: req.body.reasearch_interest,
        live: req.body.live,
        move: req.body.move,
	achieve: req.body.achieve,
	stay_here: req.body.stay_here,
	career: req.body.career,
	time_week: req.body.time_week,
	resume: req.body.resume,
	cover_letter: req.body.cover_letter,
	uuid: req.body.uuid
    }).then(function(newProf) {
	    profId = (newProf.dataValues.id).toString();
	res.send(profId);
    }).catch(function(err) {
        res.json(err);
	});
});
