const User = require('../models/User')

var users = [new User('Paul', 'Vaidalauskas'), new User('Viktor', 'Naumchuk'), new User('Bogdan', 'Zarickiy')];

exports.getUsers = function (req, res) {
    res.render('users/index', {
        users: users
    });
}

exports.getUser = function(req, res, next) {
    let id = req.params.id;
    if (!users[id]) {
        return next(new Error(`Wrong parameter [id]: ${id}`));
    }

    res.render('user/index', {
        user: users[id]
    });
}