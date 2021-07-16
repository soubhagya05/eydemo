const express = require('express')
const app = express()
app.use(express.json())

/**
 * @descriptionMiddleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next function in the application’s request-response cycle. 
 * The next function is a function in the Express router which, 
 * when invoked, executes the middleware succeeding the current middleware
 */

// Enabling CORS in Node. js
app.use((req, res, next) => {
    res.setHeader(
      'Access-Control-Allow-Origin',
      '*'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept,Authorization'
    )
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,POST,DELETE,PUT'
    )
    next()
  })

// routes
const routes = require('./routes')
app.use('/', routes)

module.exports = app