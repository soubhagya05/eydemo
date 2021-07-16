const http = require('http')
const app = require('./app')
const server = http.createServer(app);

// Start App
const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Running firstRest on Port' + port)
})
