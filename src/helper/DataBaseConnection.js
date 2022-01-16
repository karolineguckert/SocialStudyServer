// const {Client} = require('pg');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('social_study', 'karol', '12kAL21!', {
    host: '172.29.192.1',
    dialect: 'postgres',
    port:'8081'
});

module.exports = sequelize;

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
