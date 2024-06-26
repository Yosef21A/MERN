const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/allproduct', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.patch('/api/update/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);

}
