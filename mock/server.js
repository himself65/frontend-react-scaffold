const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
// const jwt = require('jsonwebtoken')

const app = express()
const secretKey = 'secretKey'

app.use(morgan('combined'))
app.use(bodyParser())
app.use(expressJwt({ secret: secretKey }).unless({ path: ['/user/login', '/user/register'] }))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.listen(3001, () => {
  console.log(`listen at http://localhost:3001`)
})
