require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');
var shelfItem = require('./controllers/shelfitemcontroller');

sequelize.sync();
app.use(bodyParser.json());


app.use('/api/shelfitem', shelfItem);


app.listen(8080, function(){
    console.log("you on line 8080!");
})