const router = require('express').Router()
const usersRoute = require('./users')

router.get('/', (req, res) => {
  return res.send('Hellow World')
})

router.use('/users', usersRoute)

module.exports = router