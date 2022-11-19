var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

exports.isAuthenticated = function(req, res, next) {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') 
        {
            var jwtToken = req.headers.authorization.split(' ')[1];
            jwt.verify(jwtToken, process.env.JWT_SECRECT, function(err, payload) {

            })
        }
}