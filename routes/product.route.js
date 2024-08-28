const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

router.get('/get', ProductController.addProducts);
router.post('/post', ProductController.addProducts);

module.exports = router;