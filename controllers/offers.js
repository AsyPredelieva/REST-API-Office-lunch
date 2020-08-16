const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20

        models.Offer.find()
            .limit(length)
            .populate('author')
            .then((offers) => res.send(offers))
            .catch(next)
    },
}
