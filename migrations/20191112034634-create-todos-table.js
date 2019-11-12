'use strict'
const Sequelize = require('sequelize')
const config = require('../config/database')
const tableName = 'todos'
const attributes = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  checked: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'updated_at'
  },
  deletedAt: {
    type: Sequelize.DATE,
    field: 'deleted_at'
  }
}
const schema = 'todo_schema'
const options = {
  paranoid: true,
  timestamps: true,
  schema
}

const username = config.username

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`create schema if not exists ${schema} authorization ${username}`)
      .then(function () {
        return queryInterface.createTable(tableName, attributes, options)
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, { schema })
      .then(function () {
        return queryInterface.sequelize.query(
          `drop table if exists ${schema}.${tableName} cascade`
        )
          .then(function () {
            return queryInterface.sequelize.query(
              `drop schema if exists ${schema} cascade`
            )
          })
      })
  }
}
