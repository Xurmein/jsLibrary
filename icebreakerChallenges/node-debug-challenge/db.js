const Sequelize = require('sequelize');

const sequelize = new Sequelize('pieAPI', 'postgres', 'XURMein420?', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(
        function() {
            console.log("Connected to DB");
        },

    function(err) {
        console.log(err);
    }
)

module.exports = sequelize;