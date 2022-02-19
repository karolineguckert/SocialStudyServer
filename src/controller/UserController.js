const express = require('express');
const router = express.Router();
const UserRepository = require('../repository/UserRepository')
const jwt = require('jsonwebtoken');

router.put('/', function(req, res, next) {
    UserRepository.insertUser(req.body);
    res.send({success: true, code: 200});
});

router.post('/login', function(req, res, next) {
    UserRepository.loginUser(req.body).then(loginResp => validateId(loginResp))

    function validateId(userId) {
        if (userId !== -1){
            const token = jwt.sign({ userId }, process.env.SERVER_SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json({ auth: true, token: token });
        } else {
            return res.json({ auth: false, token: "" });
        }
    }
});

module.exports = router;
