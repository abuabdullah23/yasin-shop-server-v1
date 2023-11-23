const ProductModel = require("../../models/dashboard/ProductModel");

// http://localhost:5000/get-category-products?slug=rice //to get category wise products
const getCategoryProducts = async (req, res) => {
    try {
        const category_slug = req.query.slug;
        const query = { slug: category_slug };
        const result = await ProductModel.find(query);
        res.send(result);
    } catch (error) {
        console.error('Error fetching category products:', error);
        res.status(500).send({ error: 'An error occurred while fetching products.' });
    }
}

module.exports = getCategoryProducts;