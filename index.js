const express = require('express')
const { red, green } = require('kleur')
const cors = require('cors')
const handleError = require('./utils/handleError')

require('./db')

const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', routes())

// Error handler
app.use(handleError)

// unhandleRejection and uncaughtException
function handleFatalError (err) {
  console.error(red().bold(err.stack))
  process.exit(1) // service restarts
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

var port = require('./config/port').port || 3010

const server = app.listen(port, () => {
  console.log(green().bold(`Listenning to port ${port}...`))
})

module.exports = server
