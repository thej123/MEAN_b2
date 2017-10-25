var userController = require('./../controllers/userController.js');
var pollController = require('./../controllers/pollController.js');
var path = require('path');

module.exports = function(app) {
    
    // app.post('/user', userController.findOne);
    app.post('/user', userController.create);

    app.get('/questions', pollController.showall);
    app.get('/refinedquestions', pollController.showrefined);
    app.get('/question/:id', pollController.showone);
    app.delete('/question/:id', pollController.delete);
    app.put('/question/:id', pollController.update);
    app.post('/question', pollController.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./clientexamone/dist/index.html"))
    });

}