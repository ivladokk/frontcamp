const app = require('./app/app.js')
const port = process.env.PORT || 3000

var express = require('express');


// respond with "hello world" when a GET request is made to the homepage

app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log(`server is listening on ${port}...`)
})
