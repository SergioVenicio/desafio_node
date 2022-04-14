const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./db')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const port = 3000


app.get('/', (req, res) => {
  res.contentType('application/json')
  connection.query('SELECT name FROM app_config LIMIT 1', function (error, results, fields) {
    console.log(error)
    console.log(results)
    res.send({
      'config': results
    })
  })
})

app.listen(port, () => {
  console.log('Running on', port)
})
