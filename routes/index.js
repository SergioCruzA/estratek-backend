const express = require('express')
const router = express.Router()

const todoRoutes = require('./todo')

module.exports = () => {
  // Route to check the api status
  router.get('/status', (req, res) => {
    res.send({ status: true })
  })

  // Route to acces todo table
  router.use('/todos', todoRoutes())

  return router
}