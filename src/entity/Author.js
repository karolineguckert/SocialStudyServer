const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const User = require("./User");
const Question = require("./Question");

class Author extends Model {}

Author.init({
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
    modelName: 'author'
});

Author.hasOne(Question, {foreignKey:'id_question', allowNull: false});
Author.hasOne(User, {foreignKey:'id_user', allowNull: false});

console.log(Author === sequelize.models.Author);
Author.sync().then();

module.exports = Author;
