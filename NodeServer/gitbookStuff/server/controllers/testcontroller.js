var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// router.get('/', function (req, res) {  //GET test 1
//     res.send('I am Test Route, son of Best Route, heir to the throne of self-doubt!')
// });

// router.get('/about', function (req, res) {  //GET test 2
//     res.send('ze aboot route')
// });

// router.get('/contact', function (req, res) {  //GET test 3
//     res.send({user: 'Jake', email: 'wj.pavocrist@gmail.com'})
// });

// router.get('/projects', function (req, res){ //GET test 4
//     res.send(["Project 1", "Project 2"])
// });

// router.get('/friends', function (req, res) { //GET test 5
//     res.send([
//         {name: 'Rich Fern', alias: 'Brick Burns'},
//         {name: 'Dan Ryan Wood', alias: 'Woo'},
//         {name: 'Alex Orton', alias: 'Danza'}
//     ]);
// });

router.post('/one', function(req, res){  //POST test 1
    res.send('Soy el examen numero uno')
});

router.post('/two', function(req, res){ //POST test 2
    let testData = "endpoint two data";
    TestModel
    .create({testdata: testData})
    .then(dataFromDatabase => {
            res.send('Soy el examen numero dos')
        })
})

router.post('/three', function(req, res) { //POST test 3
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        res.send('Soy el examen numero tres')
        console.log('Soy el examen numero tres')
});


router.post('/four', function(req, res){  //POST test 4
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(){
                res.send('test four, fella')
            }
        );
});

router.post('/five', function (req, res){ //POST test 5
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data){
                res.send(data);
            }
        );
});

router.post('/six', function (req, res){ //POST test 6
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata){
                res.json({
                    testdata: testdata
                });
            }
        );
});

router.post('/seven', function (req, res){ //error handling
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata){
                res.json({
                    testdata: testdata
                });
            },
            function createError(err){
                res.send(500, err.message);
            }
        );
});

router.get('/helloclient', function (req, res) {
    res.send('message from server to client.')
})

router.get('/one', function(req, res){
    TestModel
        .findAll({
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data){
                console.log('Controller data:', data);
                res.json(data);
            },
            function findAllError(err){
                res.send(500, err.message);
            }
        );
});

module.exports = router;