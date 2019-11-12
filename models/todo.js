module.exports = (sequelize, DataTypes) => {
  // Define todo schema
  const todoSchema = {
    tableName: 'todos',
    properties: {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      checked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at'
      }
    },
    options: {
      paranoid: true,
      timestamps: true,
      schema: 'todo_schema'
    }
  }

  const Todo = sequelize.define(
    todoSchema.tableName,
    todoSchema.properties,
    todoSchema.options
  )

  // It is used for associate with other models
  /* Todo.associate = (models) => {
  } */

  return Todo
}
