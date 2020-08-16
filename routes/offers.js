const controllers = require('../controllers')
const router = require('express').Router()
const { auth } = require('../utils')

router.get('/', controllers.offers.get)

// router.get('/:id', controllers.offers.get)

// router.post('/', auth(), controllers.offers.post)

// router.put('/:id', controllers.offers.put)

// router.delete('/:id', auth(), controllers.offer.delete)

module.exports = router
