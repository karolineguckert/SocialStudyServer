const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const Stamps = require("./Stamps");
const UserLevel = require("./UserLevel");

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    avatar: {
        type: DataTypes.TEXT,
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
    modelName: 'users'
});

User.belongsTo(Stamps, {foreignKey:'id_user_stamps', allowNull: true});
User.belongsTo(UserLevel, {foreignKey:'id_user_level', allowNull: false});

console.log(User === sequelize.models.user);
User.sync().then();

module.exports = User;
