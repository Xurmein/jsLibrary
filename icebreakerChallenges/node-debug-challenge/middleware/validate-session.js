const jwt = require('jsonwebtoken');
var sequelize = require('../db');
var Player = sequelize.import('../models/player');

module.exports = function (req, res, next) {
    if (req.method == 'OPTIONS') {
        next();   // allowing options as a method for request
    } else {
        var sessionToken = req.headers.authorization;
        console.log(sessionToken);
        if (!sessionToken){
         return res.status(403).send({ auth: false, message: "No token provided." });
        } else {
            jwt.verify(sessionToken, 'lets_play_sum_games_man', (err, decoded) => {
                if (decoded) {
                    Player.findOne({ where: { id: decoded.id } }).then(player => {
                        req.player = player;
                        next()
                    },
                        function () {
                            res.status(401).send({ error: "not authorized" });
                        })

                } else {
                    res.status(400).send({ error: "not authorized" })
                }
            });
        }
    }
}