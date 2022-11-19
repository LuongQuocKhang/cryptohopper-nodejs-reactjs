var jwt = require('jsonwebtoken');

const login = async (req,res) => {

    var username = req.body.userName;
    var password = req.body.password;
    console.log(req.body);
    if( username === "QuocKhangLuong1012@gmail.com" && password === "123") {
        var payload = { username: username };
        var jwtToken = jwt.sign(payload, process.env.JWT_SECRECT,
            {
                expiresIn: 1 * 60
            });

        console.log("jwtToken: " + jwtToken);

        var jsonResponse = {
            'access_token': jwtToken, 
            'refresh_token': "xxxxx-xxx-xx-x"
        };
        res.json(jsonResponse)
    }
    else {
        res.json({ error : 'Login Error'})
    }
    
}
const register = async (req,res) => {
    res.json({ error : 'register Error'});
}
const resetPassword = async (req,res) => {
    res.json({ error : 'resetPassword Error'});
}
module.exports = {
    login,
    register,
    resetPassword
};