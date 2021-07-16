const express = require('express')
const router = express.Router()
const request = require('request')
const config = require('../config')
/**
 * @description Hit this url on browser to get the data
 */
router.get('/get-data', async (req, res) => {
    
    
    /**
     * @description Request is designed to be the simplest way possible to make http calls. 
     * It supports HTTPS and follows redirects by default
     */
    request({
        method: 'GET',
        url:config.URL,
      },
      async function (error, response, body) {
          if(error){
            return res.json({'err':error})
          }
          console.log('hello getapi')
          console.log('data',body)
        return res.send({'data' :body })
    })
})
module.exports = router