const express = require('express');
const router = express.Router();
const UserRepository = require('../repository/UserRepository')
const jwt = require('jsonwebtoken');

router.put('/usuario/:teste', function(req, res, next) {
    UserRepository.insertUser(req.body);
    res.send({success: true, code: 200});
});

router.post('/login', function(req, res, next) {
    UserRepository.loginUser(req.body).then(loginResp => validateId(loginResp))

    function validateId(userId) {
        if (userId !== -1){
            console.log("process",process.env.SECRET)
            const token = jwt.sign({ userId }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json({ auth: true, token: token });
        } else {
            console.log("Não existe")
        }
    }
});

module.exports = router;
