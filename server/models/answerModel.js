var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    answer: {type: String, required: true},
    details: {type: String},
    likes: {type: Number, required: true, default: 0},
    _questionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
    }
});

mongoose.model('Answer', AnswerSchema);