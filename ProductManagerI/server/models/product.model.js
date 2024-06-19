const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, '{Path} is required'],
        minlength: [3, '{Path} must be at least 3 characters long']

    },
    price: { 
        type: Number,
        required: [true, '{Path} is required'],
        min: [1, '{Path} must be at least 1$']
    }, 
    description: { 
        type: String,
        required: [true, '{Path} is required'],
        minlength: [3, '{Path} must be at least 3 characters long']
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

