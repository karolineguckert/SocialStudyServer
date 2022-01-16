const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');

class DifficultyLevel extends Model {}

DifficultyLevel.init({
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
    modelName: 'difficulty_level'
});

console.log(DifficultyLevel === sequelize.models.difficultyLevel);
DifficultyLevel.sync().then();

module.exports = DifficultyLevel;