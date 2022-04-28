const express = require('express');
const router = express.Router();
const UserRepository = require('../repository/UserRepository')
const jwt = require('jsonwebtoken');

router.put('/', function(request, response, next) {
   console.log("chegou aqui", request.body)
});


module.exports = router;
