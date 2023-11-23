const ProductModel = require("../../models/dashboard/ProductModel");

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    const result = await ProductModel.findByIdAndDelete(productId);
    res.send(result);
}

module.exports = deleteProduct;