const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');

class Topic extends Model {}

Topic.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    modelName: 'topic'
});

console.log(Topic === sequelize.models.topic);
Topic.sync().then();

module.exports = Topic;