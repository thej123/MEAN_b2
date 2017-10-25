var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1}
});

mongoose.model('User', UserSchema);