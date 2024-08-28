const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category');

router.get('/get', CategoryController.getAllCategories );

router.post('/post', CategoryController.addCategories);

module.exports = router;