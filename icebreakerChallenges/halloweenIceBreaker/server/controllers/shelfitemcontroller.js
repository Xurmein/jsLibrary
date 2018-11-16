var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var ShelfItem = sequelize.import('../models/shelfitem');

router.post('/add', function (req, res){
    let movieTitle = req.body.shelfItem.title;
    let debut = req.body.shelfItem.releaseDate;
    let category = req.body.shelfItem.typeOf;

    ShelfItem.create({
        title: movieTitle,
        releaseDate: debut,
        typeOf: category
    })
        .then(
            function addedItem() {
                res.send('Successfully added new Item to Smart-Shelf!')
            },
            function addFail(err){
                res.send(500, err.message)
            })
})

router.get('/all', function(req, res){
    ShelfItem
        .findAll({
            attributes: ['id', 'title', 'releaseDate', 'typeOf']
        })
        .then(
            function displayShelfLibrary(data){
                console.log('Your smart shelf library:', data);
                res.json(data);
            },
            function displayShelfError(err){
                res.send(500, err.message)
            }
        )
})

module.exports = router;