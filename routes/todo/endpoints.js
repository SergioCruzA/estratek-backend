const express = require('express')

const createController = require('./controllers/create')
const readAllController = require('./controllers/readAll')
const updateController = require('./controllers/update')
const deleteController = require('./controllers/delete')

const router = express.Router()

module.exports = () => {
  // Create new todo
  router.post('/', createController)
  // Get all todos
  router.get('/', readAllController)
  // Update todo
  router.patch('/:todoId', updateController)
  // Delete todo
  router.delete('/:todoId', deleteController)

  return router
}
