var crypto = require('crypto');
const secretKey = "AABBCCDDEE"

const passwordEncrypt = (value) => {
    var mykey = crypto.createCipher('aes-128-cbc', secretKey);
    var mystr = mykey.update(value, 'utf8', 'hex')
    mystr += mykey.final('hex');
    // callback(mystr)
    return mystr
}

const responseJSONFormat = (status, data) => {
    let obj = new Object()
    obj.success = status;
    obj.data = data
    return obj;
}

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    passwordEncrypt,
    responseJSONFormat,
    getRandomInteger
}