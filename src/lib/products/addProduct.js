const ProductModel = require("../../models/dashboard/ProductModel");

const addProduct = async (req, res) => {
    const { name, categoryId, brand, stock, price, discount, description, image } = req.body;

    try {
        await ProductModel.create({ name, categoryId, brand, stock, price, discount, description, image });
        res.status(200).send({ success: true, message: 'Product added successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = addProduct;