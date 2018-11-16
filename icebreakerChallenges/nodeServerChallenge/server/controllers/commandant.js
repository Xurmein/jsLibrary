var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Person = sequelize.import('../models/person');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/signup', function(req, res){
    let nombre = req.body.person.nom;
    let eMail = req.body.person.email;
    let pass = req.body.person.password;

    Person.create({
        nom: nombre,
        email: eMail,
        password: bcrypt.hashSync(pass, 10)
    })
        .then(
            createSuccess = (person) => {
                let token = jwt.sign({ id: person.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                res.json({
                    user: person,
                    message: 'welcome',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err)
        )
})

module.exports = router