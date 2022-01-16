const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');

class UserLevel extends Model {}

UserLevel.init({
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
    modelName: 'user_level'
});

console.log(UserLevel === sequelize.models.userLevel);
UserLevel.sync().then();

module.exports = UserLevel;
