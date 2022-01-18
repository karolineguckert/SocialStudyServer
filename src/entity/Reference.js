const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const Question = require("./Question");

class Reference extends Model {}

Reference.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publicationCompany: {
        type: DataTypes.STRING,
        allowNull: false
    },

    authors: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },

    additionalInformation: {
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
    modelName: 'reference'
});

Reference.hasOne(Question, {foreignKey:'id_question', allowNull: true});

console.log(Reference === sequelize.models.Reference);
Reference.sync().then();

module.exports = Reference;
