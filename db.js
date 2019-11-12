const Sequelize = require('sequelize')
const models = require('./models')
const config = require('./config/database')

class DB {
  constructor () {
    if (!DB.sequelize) {
      this.config = config
      this.sequelize = new Sequelize(this.config)
      this.__connectionTest()
      this.sequelize = models(this.sequelize)
    } else {
      console.log('El objeto ya estaba instanciado')
    }

    return this.sequelize
  }

  __connectionTest () {
    this.sequelize.authenticate()
      .then(() => {
        console.log('DB is conected')
      })
      .catch((err) => {
        console.log(err)
        process.exit(1)
      })
  }
}

const dbInstance = new DB()

module.exports = dbInstance
