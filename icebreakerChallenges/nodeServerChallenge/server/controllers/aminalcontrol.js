var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Aminal = sequelize.import('../models/aminal');
var validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, function (req, res){
    if(!req.errors){
    let name = req.body.name;
    let legs = req.body.legnumber;
    let predator = req.body.predator;

    Aminal.create({
        name: name,
        legNumber: legs,
        predator: predator
    })
        .then(
            function (){
                res.send('Added another additional aminal')
            },
            function(err){
                console.log(err)
            }
        )
    } else {
        res.send(500).json(req.errors);
    }
})

router.delete('/delete/:id', validateSession, function(req, res){
    let id = req.params.id;
    Aminal.destroy({
        where: {id: id}
    })
        .then(
            function(){
                res.send('Aminal terminated')
            },
            function(err){
                console.log(err)
            }
        )
})

module.exports = router;