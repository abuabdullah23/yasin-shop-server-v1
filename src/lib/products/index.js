const getAllProducts = require('./getAllProducts');
const getSingleProduct = require('./getSingleProduct');
const addProduct = require('./addProduct');
const updateProduct = require('./updateProduct');
const getCategoryProducts = require('./getCategoryProducts');
const deleteProduct = require('./deleteProduct');

module.exports = {
    getAllProducts,
    getSingleProduct,
    getCategoryProducts,
    addProduct,
    updateProduct,
    deleteProduct
}