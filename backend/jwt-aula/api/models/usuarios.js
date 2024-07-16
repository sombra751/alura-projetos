'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsToMany(models.roles, {
        through: 'usuarios_roles', 
        as: 'usuario_roles',
        foreignKey: 'usuario_id'
      })
      Usuarios.belongsToMany(models.permissoes, {
        through: 'usuarios_permissoes', 
        as: 'usuario_permissoes',
        foreignKey: 'usuario_id'
      })
    }
  }
  Usuarios.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
    defaultScope: {
      attributes:{
        exclude: ['password']
      }
    }
  });
  return Usuarios;
};