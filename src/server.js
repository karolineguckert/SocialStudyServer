const bodyParser = require('body-parser')
const express = require('express');
const dotenv = require('dotenv');
const server = express();

/*
  Server configurations
 */

/*
    Read the project searching for an archive .env
 */
dotenv.config();

/*
  Convert a body in json for an object js
 */
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.use(function(req, res, next) {

    // Return to the same page that do de request
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type');

    res.setHeader('Access-Control-Expose-Headers', '*');

    // Finish configurations
    next();
});

/*
  Routers path
 */
const userRouter = require('./controller/UserController');
// const categoryRouter = require('./controller/CategoryLevel');
// const difficultyLevelRouter = require('./controller/DifficultyLevelController');
// const messageRouter = require('./controller/MessageController');
// const questionRouter = require('./controller/QuestionController');
// const referenceRouter =

/*
  Routers definition
 */
server.use('/user', userRouter);
// server.use('/category', categoryRouter);
// server.use('/difficulty', difficultyLevelRouter);
// server.use('/message', messageRouter);

/*
  Listen on provided port, on all network interfaces.
*/
const port = process.env.SERVER_PORT;
server.set('port', port);
server.listen(port, function (){console.log("Server on-line at port " + port)});

module.exports = server;
