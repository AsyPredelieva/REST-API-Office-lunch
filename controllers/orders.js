const models = require('../models')
const { create } = require('express-handlebars')

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20

        models.Order.find()
            .sort('-created_at')
            .limit(length)
            .populate('author')
            .then((orders) => res.send(orders))
            .catch(next)
    },

    post: (req, res, next) => {
        const { order, totalSum } = req.body
        const { _id } = req.user

        models.Order.create({ order, totalSum, author: _id })
            .then((createdOrder) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { orders: createdOrder } }),
                    models.Order.findOne({ _id: createdOrder._id }),
                ])
            })
            .then(([modifiedObj, orderObj]) => {
                res.send(orderObj)
            })
            .catch(next)
    },
}
