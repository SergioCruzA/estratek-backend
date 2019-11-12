'use strict'

let environment
let path

switch (process.env.NODE_ENV) {
  case 'development':
    environment = 'DEV_'
    break
  case 'production':
    environment = ''
    break
  default:
    const dotenv = require('dotenv')
    const env = '.env'
    environment = 'TEST_'
    path = `${__dirname}/../${env}`
    dotenv.config({ path })
    break
}

module.exports = environment
