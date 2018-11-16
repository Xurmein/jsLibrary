var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Player = sequelize.import('../models/player');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    var name = req.body.player.fullname;
    var user = req.body.player.username;
    var pass = bcrypt.hashSync(req.body.player.passwordHash, 10);
    var eMail =  req.body.player.email;

    Player.create({
        fullname: name,
        username: user,
        passwordHash: pass,
        email: eMail
    })
        .then(
            function signupSuccess(player) {
                let token = jwt.sign({ id: player.id }, 'lets_play_sum_games_man', { expiresIn: 60 * 60 * 24 });
                res.status(200).json({
                    user: player,
                    token: token
                })
            },

            function signupFail(err) {
                res.status(500).send(err.message)
            }
        )
})

router.post('/signin', (req, res) => {
    Player.findOne({ where: { username: req.body.player.username } }).then(player => {
        if (player) {
            bcrypt.compare(req.body.player.password, player.passwordHash, function (err, matches) {
                if (matches) {
                    var token = jwt.sign({ id: player.id }, 'lets_play_sum_games_man', { expiresIn: 60 * 60 * 24 });
                    res.json({
                        user: player,
                        message: "Successfully authenticated.",
                        sessionToken: token
                    });
                } else {
                    res.status(502).send({ error: "Passwords do not match." })
                }
            });
        } else {
            res.status(403).send({ error: "User not found." })
        }

    })
})

module.exports = router;