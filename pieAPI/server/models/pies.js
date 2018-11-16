module.exports = (sequelize, DataTypes) => {
    const Pie = sequelize.define('pie', {
        nameOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        baseOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crust: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeToBake: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servings: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    
    return Pie;
}