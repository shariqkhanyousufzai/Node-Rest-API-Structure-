require("dotenv").config();
var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
db= require('./config/config').get(process.env.NODE_ENV),
mongoose = require('mongoose'),
auth = require('./middlewares/auth'), //this is middlewar
cookieParser = require('cookie-parser'),
Task = require('./api/models/todoListModel'), //created model Task loading here
Projects = require('./api/models/projectModel'), //created model Project loading here
User = require('./api/models/userModel'), //created model Project loading here
Categories = require('./api/models/categoryModel'), //created model Project loading here
bodyParser = require('body-parser');





  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// for parsing cookie
app.use(cookieParser());


var routes = require('./api/routes/todoListRoutes'); //importing route for Task
var projectrountes = require('./api/routes/projectRoutes'); //importing route for Project
var userrountes = require('./api/routes/userRoutes'); //importing route for USers
var categoryrountes = require('./api/routes/categoryRoutes'); //importing route for Categpry

projectrountes(app); //register project route
routes(app); //register the route
userrountes(app) // register the route for user
categoryrountes(app); //using for category routes
 

app.listen(port);

// setting up the middleware 
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('todo list RESTful API server started on: ' + port);