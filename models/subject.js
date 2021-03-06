'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.belongsToMany(models.Student, {
        through: models.Student_Subject,
        foreignKey: 'subjectId',
        otherKey: 'studentId'
      })
    }
  };
  Subject.init({
    caption: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    hoursQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};