var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = {
    findOne: function(req, res) {
        console.log("inside user findone");
        console.log(req.body);

        Answer.findOne({name: req.body.user}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    // create: function (req, res) {
    //     console.log("inside user create", req.body);        
    //     User.findOne({name: req.body.name}, function (err, data) {
    //         if (err) {
    //             console.log("could not retrive data");
    //             res.json(err);
    //             var job = new User(req.body);
    //             job.save(function (err, aNote) {
    //                 if(err) {
    //                     res.json (err);
    //                     return;
    //                 }
    //                 res.json(aNote);
    //             });
    //             return;
    //         }
    //         res.json(data);
    //     });
    // },
    create: function (req, res) {
        var job = new Answer(req.body);
        job.save(function (err, aNote) {
            if(err) {
                res.json (err);
                return;
            }
            res.json(aNote);
        });
        return;
            
    },

    itsAnswers: function (req, res) {
        console.log("got to itsanswers");
        Answer.find({_questionID: req.params.id}, function (err, data) {
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
        Answer.update({_id: req.params.id}, req.body, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
}