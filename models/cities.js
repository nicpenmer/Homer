var sequelizeRouter = require('sequelize-router');

module.exports = function (sequelize, DataTypes) {
    const cities = sequelize.define('cities', {
        City: DataTypes.STRING,
        AvRent:DataTypes.STRING,
        PubCost:DataTypes.STRING,
        AvSal:DataTypes.STRING,
        Growth:DataTypes.STRING,
        AvLunch:DataTypes.STRING,
    });
    return cities;
};