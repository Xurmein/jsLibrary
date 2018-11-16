require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();       // {force: true}
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/test', test);      //exposed route
app.use('/api/user', user);  //exposed route

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest)

app.listen(4000, function(){
    console.log('Semper fidelis tyrannosaurus 4000')
});

app.use('/api/test', function(req, res){
    res.send("Straight outta server, I've been here for milliseconds...")
});