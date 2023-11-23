const { getAllCategories, getSingleCategory } = require('../../../lib/categories');

const router = require('express').Router();

router.get('/get-categories', getAllCategories);
router.get('/category-details/:id', getSingleCategory);

module.exports = router;