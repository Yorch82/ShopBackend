'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Section);
      Product.belongsToMany(models.Order, { through: 'Order_Product' });
      Product.hasMany(models.Review);
    }
  }
  Product.init({
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please insert a valid Product',
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please insert a correct Price',
        },
      },
    },
    oldprice: {
      type: DataTypes.FLOAT,
    },
    image_path: {
      type: DataTypes.STRING,
    },
    sectionId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};