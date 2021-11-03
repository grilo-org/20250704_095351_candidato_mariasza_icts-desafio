/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Compra', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo_pagamento: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    status: {
      type: DataTypes.CHAR(1),
      default: 's',
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'Compra',
    timestamps: false
  });
};
