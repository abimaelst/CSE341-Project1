const router = require('express').Router()
const contactsRoute = require('./contacts')
const swaggerRoute = require('./swagger')

router.get('/', (req, res) => {
  //#swagger.tags=['Hello World']
  res.send('Hello World')

})

router.use('/contacts', contactsRoute)
router.use('/', swaggerRoute)

module.exports = router