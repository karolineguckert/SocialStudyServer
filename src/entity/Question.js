const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const Category = require("./Category");
const DifficultyLevel = require("./DifficultyLevel");

class Question extends Model {}

Question.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    enunciated: {
        type: DataTypes.STRING,
        allowNull: false
    },

    answer: {
        type: DataTypes.TEXT,
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
    modelName: 'question'
});

Question.hasOne(Category, {foreignKey:'id_category', allowNull: true});
Question.hasOne(DifficultyLevel, {foreignKey:'id_difficulty_level', allowNull: true});

console.log(Question === sequelize.models.Question);
Question.sync().then();

module.exports = Question;
