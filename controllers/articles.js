const models = require('../models')

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20

        models.Article.find()
            .limit(length)
            .then((articles) => res.send(articles))
            .catch(next)
    },
}
