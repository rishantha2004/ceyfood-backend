const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: true,
    },
    richDes: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    qty: {
        type: Number,
        required: true,
        max: 255,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', productSchema);