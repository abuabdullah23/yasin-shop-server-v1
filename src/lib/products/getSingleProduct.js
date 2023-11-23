const ProductModel = require("../../models/dashboard/ProductModel");

const getSingleProduct = async (req, res) => {
    const productId = req.params.id;
    const result = await ProductModel.findById(productId).populate('categoryId', '_id title slug');
    res.send(result);
}

module.exports = getSingleProduct;