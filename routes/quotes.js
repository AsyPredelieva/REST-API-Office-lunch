const controllers = require('../controllers')
const router = require('express').Router()

router.get('/', controllers.quotes.get)

module.exports = router
