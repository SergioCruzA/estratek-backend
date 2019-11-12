'use strict'

module.exports = (sequelize) => {
  var fs = require('fs')
  var path = require('path')
  var Sequelize = require('sequelize')
  var db = {}

  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')
    })
    .forEach(file => {
      var model = sequelize['import'](path.join(__dirname, file))
      db[model.name] = model
    })

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) db[modelName].associate(db)
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize

  return db
}
