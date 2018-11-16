module.exports = function (sequelize, DataTypes){
    return sequelize.define('aminal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        legNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        predator: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })  
}