const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20

        models.Quote.find()
            .limit(length)
            .then((quotes) => res.send(quotes))
            .catch(next)
    },
}
