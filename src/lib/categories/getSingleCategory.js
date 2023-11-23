const CategoryModel = require("../../models/dashboard/CategoryModel");

const getSingleCategory = async (req, res) => {
    const categoryId = req.params.id;
    const result = await CategoryModel.findById(categoryId);
    res.send(result);
}

module.exports = getSingleCategory;