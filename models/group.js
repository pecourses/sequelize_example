'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    
    static associate(models) {
      Group.hasMany(models.Student,{foreignKey:'groupId', onDelete:'RESTRICT', onUpdate:'CASCADE'});
    }
  };
  Group.init({
    groupCode: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:true,
    },
    departmentId: {
      type:DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};