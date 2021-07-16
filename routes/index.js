const express = require('express')
const router = express.Router()
const getApi = require('./api')

router.use('/api', getApi)

module.exports = router