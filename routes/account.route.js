var express = require('express');
var router = express.Router();
const accountController = require("../api/v1/controllers/account.controller");

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', accountController.login);
router.post('/register', accountController.register);

module.exports = router;