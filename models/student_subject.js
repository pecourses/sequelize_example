'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_Subject extends Model {

    static associate(models) {
      
    }
  };
  Student_Subject.init({
   studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mark:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
      modelName: 'Student_Subject',
  });
  return Student_Subject;
};