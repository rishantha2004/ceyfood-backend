const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.post('/post', loginController.Login);


module.exports = router;