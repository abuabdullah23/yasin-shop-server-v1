// get all products, sort by newest 
// situation 01: http://localhost:5000/get-all-products // all products
// situation 02: http://localhost:5000/get-all-products?slug=achar  //category wise products
// situation 03: http://localhost:5000/get-all-products?sortField=price&sortOrder=asc // sort products
// situation 04: http://localhost:5000/get-all-products?pageNumber=1&perPage=2 // pagination products
// situation 05: http://localhost:5000/get-all-products?slug=achar&pageNumber=1&perPage=2&sortField=price&sortOrder=asc // total filtering products

const productModel = require("../../models/dashboard/ProductModel");

const getAllProducts = async (req, res) => {

    let queryCategory = {} // 02
    let sortObj = {} // 03

    const category_slug = req.query.slug; // 02
    const sortField = req.query.sortField; // 03
    const sortOrder = req.query.sortOrder; // 03

    // pagination 04
    const pageNumber = Number(req.query.pageNumber);
    const perPage = Number(req.query.perPage);
    const skipPage = (pageNumber - 1) * perPage;

    if (category_slug) {
        queryCategory.slug = category_slug;
    }

    if (sortField && sortOrder) {
        sortObj[sortField] = sortOrder
    } else {
        sortObj = { _id: -1 }
    }

    const result = await productModel.find(queryCategory).skip(skipPage).limit(perPage).sort(sortObj);


    const total = await productModel.find({}).countDocuments();

    res.send({
        total,
        result
    })
}

module.exports = getAllProducts;