var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser')
var player = require('./controllers/playercontroller');
var game = require('./controllers/gamecontroller')

sequelize.sync();
app.use(bodyParser.json());
app.use('/api/auth', player);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(function() {
    console.log("App is listening on 4000");
})