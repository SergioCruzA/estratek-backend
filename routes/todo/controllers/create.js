const { todos: Todo } = require('../../../db')
const asyncWrap = require('../../../utils/asyncWrap')

// Middleware function to control create
const controllers = [
  async (req, res) => {
    const { body } = req

    const todo = await Todo.create(body)
    res.send(todo)
  }
]

const wrapControllers = controllers.map(asyncWrap)
module.exports = wrapControllers
