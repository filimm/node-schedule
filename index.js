const express = require('express')
const app = express()
const port = 3000
const schedule = require('node-schedule');


app.get('/', (req, res) => {
    res.send('Hello Worldddddhhhhhhh!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })