const getAllProducts = require('../../../lib/products/getAllProducts');

const router = require('express').Router();

router.get('/get-all-products', getAllProducts);

module.exports = router;