const { getAllProducts, getSingleProduct, updateProduct } = require('../../../lib/products');

const router = require('express').Router();

router.get('/get-all-products', getAllProducts);
router.get('/product-details/:id', getSingleProduct);
router.put('/update-product/:id', updateProduct);

module.exports = router;