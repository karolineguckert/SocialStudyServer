const crypto = require('crypto');

const CONFIGURATIONS = {
    algorithm : 'sha256',
    secret : 'chaves',
};

const createCipher = () => {
    let cipher = crypto.createHmac(CONFIGURATIONS.algorithm, CONFIGURATIONS.secret);
}



