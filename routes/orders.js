const controllers = require('../controllers')
const router = require('express').Router()
const { auth } = require('../utils')

router.get('/', controllers.orders.get)

router.post('/', auth(), controllers.orders.post)

module.exports = router
