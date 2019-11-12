const asyncWrap = require('../../../utils/asyncWrap')
const { todos: Todo } = require('../../../db')

// Middleware function to control delete
const controllers = [
  async (req, res) => {
    const { todoId } = req.params
    const todo = await Todo.findByPk(todoId) // Looks for the row in table
    if (!todo) throw new Error('TODO_NOT_FOUND')

    const deletedTodo = await todo.destroy()
    res.send(deletedTodo)
  }
]

const wrapControllers = controllers.map(asyncWrap)
module.exports = wrapControllers
