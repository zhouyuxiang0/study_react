const express = require('express')
const app = express()
const Home = require('./containers/Home');

app.get('/', (req, res) => res.send(
  `<html>
    <head>
      <title>hello</title>
    </head>
    <body>
      <h1>first</h1>
    </body>
  </html>`
))

app.listen(3000)
