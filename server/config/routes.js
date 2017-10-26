var answerController = require('./../controllers/answerController.js');
var questionController = require('./../controllers/questionController.js');
var path = require('path');

module.exports = function(app) {
    
    // app.post('/user', userController.findOne);
    app.post('/answer', answerController.create);
    app.get('/answers/:id', answerController.itsAnswers);
    app.put('/answer/:id', answerController.update);
    
    app.get('/questions', questionController.showall);
    // app.get('/refinedquestions', pollController.showrefined);
    app.get('/question/:id', questionController.showone);
    app.delete('/question/:id', questionController.delete);
    app.put('/question/:id', questionController.update);
    app.post('/question', questionController.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}