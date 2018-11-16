module.exports = function (sequelize, DataTypes){
    return sequelize.define('workout', {
        description: DataTypes.STRING,
        definition: DataTypes.STRING,
        result: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};