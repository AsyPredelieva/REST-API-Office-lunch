const controllers = require('../controllers')
const router = require('express').Router()

router.get('/', controllers.articles.get)

module.exports = router
