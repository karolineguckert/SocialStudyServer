const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');

class Stamps extends Model {}

Stamps.init({
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
    modelName: 'stamps'
});

console.log(Stamps === sequelize.models.stamps);
Stamps.sync().then();

module.exports = Stamps;
