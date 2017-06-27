var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport.js");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models");
var stackTrace = require('stack-trace');
var err = new Error('something went wrong');
var trace = stackTrace.parse(err);

require('assert').strictEqual(trace[0].getFileName(), __filename);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access to them.
//var routes = require("./controllers/routes.js");

//app.use('/', routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
