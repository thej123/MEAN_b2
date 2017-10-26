var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    question: {type: String, required: true, minlength: "10"},
    description: {type: String},
    _answers: [ {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
    }],
});

mongoose.model('Question', QuestionSchema);