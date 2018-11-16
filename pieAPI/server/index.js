const express = require('express');
const app = express();
require('dotenv').config();
const pies = require('./controllers/piecontroller');
const user = require('./controllers/usercontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.use(require('./models/headers'));

app.get('/', (req, res) => res.render('index'));

app.use('/auth', user);
app.use('/pies', pies);