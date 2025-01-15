const express = require('express')
const routes = require('./routes')
const mongoDb = require('./data/database')

const app = express()
const port = process.env.PORT || 3001

app.use('/', routes)




mongoDb.initDb((err) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port, () => console.log(`Database is listining and Nodde is Running on port ${port}`))
  }
})
