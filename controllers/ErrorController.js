const Error = require('../models/Error')

exports.handleError = function (err, req, res, next) {
    res.status(500)
    res.render('error', { error: new Error(err, err) })
}