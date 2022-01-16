const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const Topic = require("./Topic");

class Category extends Model {}

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
    },

    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'category'
});

Category.belongsTo(Topic, {foreignKey:'id_topic', allowNull: true});

console.log(Category === sequelize.models.category);
Category.sync().then();

module.exports = Category;
