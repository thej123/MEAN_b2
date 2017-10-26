var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    showall: function(req, res) {
        console.log("inside question showall");
        Question.find({}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    // showrefined: function(req, res) {
    //     console.log("inside showall");
    //     var jobs = Poll.find({req}, function (err, data) {
    //         if (err) {
    //             console.log("could not retrive data");
    //             res.json(err);
    //             return;
    //         }
    //         res.json(data);
    //     });
    // },
    showone: function(req, res) {
        console.log("inside poll showone");
        Question.findOne({_id: req.params.id}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    delete: function(req, res) {
        console.log("inside delete");
        Question.remove({_id: req.params.id}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    update: function(req, res) {
        console.log("inside update", req.body);
        Question.update({_id: req.params.id}, req.body, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    create: function (req, res) {
        console.log("inside create");
        console.log(req.body);
        var job = new Question(req.body);
        job.save(function (err, aNote) {
            if(err) {
                res.json (err);
                return;
            }
            res.json(aNote);
        });
    },
}