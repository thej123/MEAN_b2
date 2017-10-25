var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
    creater: {type: String, required: true},
    question: {type: String, required: true, minlength: "8"},
    option1: {type: String, required: true, minlength: "3"},
    option2: {type: String, required: true, minlength: "3"},
    option3: {type: String, required: true, minlength: "3"},
    option4: {type: String, required: true, minlength: "3"},
    votesCount1: {type: Number, required: true},
    votesCount2: {type: Number, required: true},
    votesCount3: {type: Number, required: true},
    votesCount4: {type: Number, required: true},
}, {timestamps:true});

mongoose.model('Poll', PollSchema);