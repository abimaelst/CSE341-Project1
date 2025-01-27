const express = require('express')
const routes = require('./routes')
const mongoDb = require('./data/database')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 10000

app.use(bodyParser.json())
app.use('/api/v1/', routes)

mongoDb.initDb((err) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port, () => console.log(`Database is listining and Nodde is Running on port ${port}`))
  }
})
