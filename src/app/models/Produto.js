/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Produto', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_atualizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'Produto',
    timestamps: false
  });
};
