var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    findOne: function(req, res) {
        console.log("inside showall");
        console.log(req.body);

        User.findOne({name: req.body.user}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    create: function (req, res) {
        console.log("inside user create", req.body);        
        User.findOne({name: req.body.name}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                var job = new User(req.body);
                job.save(function (err, aNote) {
                    if(err) {
                        res.json (err);
                        return;
                    }
                    res.json(aNote);
                });
                return;
            }
            res.json(data);
        });
    },
}