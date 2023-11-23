const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    image: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
},
    { timestamps: true })

// for search
productSchema.index({
    name: 'text',
    category: 'text',
    brand: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        brand: 4,
        category: 3,
        description: 2,
    }
}

)

module.exports = model("products", productSchema)

