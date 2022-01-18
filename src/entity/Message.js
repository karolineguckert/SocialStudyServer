const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const User = require("./User");
const Question = require("./Question");

class Message extends Model {}

Message.init({
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    rating: {
        type: DataTypes.INTEGER,
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
    modelName: 'message'
});

Message.hasOne(User, {foreignKey:'id_user', allowNull: true});
Message.hasOne(Message, {foreignKey:'id_father', allowNull: true});
Message.hasOne(Question, {foreignKey:'id_question', allowNull: true});

console.log(Message === sequelize.models.Message);
Message.sync().then();

module.exports = Message;
