const router = require('../routes/')

module.exports = (app) => {
    app.use('/api/user', router.user)

    app.use('/api/articles', router.articles)

    app.use('/api/quotes', router.quotes)

    app.use('/api/offers', router.offers)

    app.use('/api/orders', router.orders)

    app.use('*', (req, res, next) =>
        res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>')
    )
}
