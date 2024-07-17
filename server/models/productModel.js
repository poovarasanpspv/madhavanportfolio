const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    workingdate: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    image:{
            type: String,
            required: true
        },
    user: {
        type : mongoose.Schema.Types.ObjectId
    },

    createdAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema