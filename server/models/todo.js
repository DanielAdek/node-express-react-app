export default (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};