'use strict'
const tableName = 'todos'
const schema = 'todo_schema'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({ tableName, schema }, [
      {
        text: 'Buy Milk',
        checked: true,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        text: 'Drink Milk',
        checked: false,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        text: 'Buy Bread',
        checked: true,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        text: 'Prepare Breakfast',
        checked: false,
        created_at: new Date(),
        updated_at: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({ tableName, schema }, null, {})
  }
}
