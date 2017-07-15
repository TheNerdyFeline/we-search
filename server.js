var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
var app = express();
var db = require("./we-search-db/models");


// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Import routes and give the server access to them.
console.log(routes)
var routes = require("./api-routes/api-routes.js");
app.use('/', routes);

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
