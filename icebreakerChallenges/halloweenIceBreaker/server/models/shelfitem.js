module.exports = function (sequelize, DataTypes){
    return sequelize.define('shelfItem', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeOf: {
            type: DataTypes.ENUM('DVD', 'VHS', 'BLURAY', 'VIDEO GAME'),
            allowNull: false
        }
    })  
}