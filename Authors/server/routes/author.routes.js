const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/allauthor', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.patch('/api/update/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);

}
