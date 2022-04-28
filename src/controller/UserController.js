const express = require('express');
const router = express.Router();
const UserRepository = require('../repository/UserRepository')
const jwt = require('jsonwebtoken');

router.get('/', function(request, response, next) {
   UserRepository.getAll().then(response =>
        console.log("response", response),
       // response.send(JSON.stringify(response, null, 4))
    );


    // return users;
});

router.put('/', function(request, response, next) {
    UserRepository.insert(request.body).then(response =>
        response.send(
            {success: true,
                code: 200
            })
    );
});

router.post('/login', function(req, res, next) {
    UserRepository.login(req.body).then(loginResp => validateId(loginResp))

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
