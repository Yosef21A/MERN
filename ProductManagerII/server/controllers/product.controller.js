const { Product } = require('../models/product.model');
module.exports.createProduct = (request, response) => {
    const { title,price,description } = request.body;
    console.log(title,price,description);
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.status(400).json(err))
}

