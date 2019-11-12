'use strict'

module.exports = (err, req, res, next) => {
  const statusCode = 500
  const error = {
    message: err.message,
    path: err.path,
    value: err.value
  }
  return res.status(statusCode).send(error)
}
