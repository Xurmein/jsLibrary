require('dotenv').config();

var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
var aminal = require('./controllers/aminalcontrol');
var person = require('./controllers/commandant');



sequelize.sync();
app.use(bodyParser.json());

app.listen(5005, function(){
    console.log("you on line 5005!");
})

app.use(require('./middleware/headers'));
app.use('/person', person);
app.use('/aminal', aminal);

app.use('/aminaltest', function (req, res){
    res.send("this is aminaltest");
})