const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT
    }
);

module.exports = sequelize;

// const {Client} = require('pg');

// function ConnectionSGBD() {
//     const client = new Client({
//         host: 'localhost',
//         database: 'colabystudy',
//         port: 5432,
//         user: 'postgres',
//         password: '12luara34',
//     });
//
//     client.connect()
//         .then(() => console.log('connected'))
//         .catch(error => console.error('connection error', error.stack));
//
//     return client;
// }
//
//
// module.exports = ConnectionSGBD;
