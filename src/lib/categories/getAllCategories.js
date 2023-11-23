// get all categories, sort by title name 
const CategoryModel = require("../../models/dashboard/CategoryModel");

const getAllCategories = async (req, res) => {
    const query = {}
    const options = {
        sort: { title: 1 }
    }
    const result = await CategoryModel.find(query).sort(options.sort);
    res.send(result);
}

module.exports = getAllCategories;