const ProductModel = require("../../models/dashboard/ProductModel");

const updateProduct = async (req, res) => {
    const { name, categoryId, brand, stock, price, discount, description, image } = req.body;
    const productId = req.params.id;

    try {
        await ProductModel.findByIdAndUpdate(productId, { name, categoryId, brand, stock, price, discount, description, image });
        res.status(200).send({ success: true, message: 'Update product successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = updateProduct;