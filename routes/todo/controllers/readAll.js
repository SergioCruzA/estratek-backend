const asyncWrap = require('../../../utils/asyncWrap')
const { todos: Todo } = require('../../../db')

/* const errors = require('../../../errors/errors')
const BussinessError = require('../../../errors/businessError') */

const controllers = [
  async (req, res) => {
    if (req.query.limit || req.query.page) {
      let { limit = 20, page = 1 } = req.query

      page = parseInt(page)
      limit = parseInt(limit)

      const todos = await Todo.findAndCountAll({
        offset: (page === 0) ? 0 : (page - 1) * limit,
        limit
      })

      let totalPages = 1
      if (todos.count > limit) { totalPages = Math.ceil(todos.count / limit) }
      const { rows, count } = agreements
      res.send({ page, totalPages, total: count, limit, todos: rows })
    } else {
      const todos = await Todo.findAndCountAll({})
      const { rows, count } = todos
      res.send({ total: count, todos: rows })
    }
  }
]

const wrapControllers = controllers.map(asyncWrap)
module.exports = wrapControllers
