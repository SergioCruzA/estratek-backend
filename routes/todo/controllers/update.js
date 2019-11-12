const asyncWrap = require('../../../utils/asyncWrap')
const { todos: Todo } = require('../../../db')

const controllers = [
  async (req, res) => {
    const { todoId } = req.params
    const { body } = req
    const todo = await Todo.findByPk(todoId)
    if (!todo) throw new Error('TODO_NOT_FOUND')

    const updatedTodo = await todo.update(body)
    res.send(updatedTodo)
  }
]

const wrapControllers = controllers.map(asyncWrap)
module.exports = wrapControllers
