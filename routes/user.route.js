const express = require('express');
const router = express.Router();
const postController = require('../controllers/users');

router.post('/post', postController.addUsers);

router.get('/get', postController.getAllUsers);

module.exports = router;