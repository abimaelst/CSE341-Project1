const router = require('express').Router()

router.get('/', (req, res) => {
  return res.send('Hellow World')
})

module.exports = router