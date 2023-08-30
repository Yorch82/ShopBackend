const {
  Product,
  Order,
  Category,
  Section,
  Review,
} = require('../models/index');

const ProductController = {
  async create(req, res, next) {
    try {
      if (req.file) req.body.image_path = req.file.filename;
      const product = await Product.create({ ...req.body });
      product.addOrder(req.body.orderId);
      res.status(201).send({ message: 'Product added...', product });
    } catch (error) {
      error.origin = 'Product';
      next(error);
    }
  },
  //Gets all products
  async getAllProduct(req, res) {
    try {
      const allproducts = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      res.status(201).send({ message: 'Search completed...', allproducts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: 'We had an issue searching the products...' });
    }
  },
  //Gets the product next to the order to which it belongs
  async getProductOrder(req, res) {
    try {
      const productsOrders = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        include: [
          {
            model: Order,
            through: { attributes: [] },
            attributes: ['id'],
          },
        ],
      });
      res.status(201).send({ message: 'Show relations', productsOrders });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem updating the product...' });
    }
  },

  //Update products by ID
  async updateProduct(req, res, next) {
    try {
      await Product.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const product = await Product.findByPk(req.params.id);
      product.setOrders(req.body.orderId);
      res.status(201).send({ message: 'Product updated...' });
    } catch (error) {
      console.log(error);
      error.origin = 'Product';
      next(error);
    }
  },
  //Delete products by ID
  async deleteProduct(req, res, next) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send({ message: 'Product has been deleted...' });
    } catch (error) {
      error.origin = 'Product';
      next(error);
    }
  },
  //Show the product next to the category and section
  async getProductCategorySection(req, res) {
    try {
      const productSectionCategory = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        include: [
          {
            model: Section,
            attributes: ['section'],
          },
          {
            model: Category,
            attributes: ['category'],
          },
        ],
      });
      res
        .status(201)
        .send({ message: 'Search completed...', productSectionCategory });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem searching the products...' });
    }
  },
  //Show product by ID
  async getProductById(req, res) {
    try {
      const productById = await Product.findOne({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },

        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Review,
            attributes: ['review', 'rating'],
          },
          {
            model: Category,
            attributes: ['category'],
          },
        ],
      });
      res.status(201).send({ message: 'Product found...', productById });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: ' We had a problem searching the product...' });
    }
  },
  //Show product by name
  async getProductByName(req, res) {
    try {
      const ProductByName = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        where: {
          product: req.params.product,
        },
      });
      res.status(201).send({ message: 'Product found...', ProductByName });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem searching the product...' });
    }
  },
  //Show product by price
  async getProductByPrice(req, res) {
    try {
      const ProductByPrice = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        where: {
          price: req.params.price,
        },
      });
      res.status(201).send({ message: 'Product found...', ProductByPrice });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem searching the product...' });
    }
  },
  //Sort products by price from highest to lowest
  async productOrderedByPrice(req, res) {
    try {
      const orderdedByPrice = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        order: [['price', 'DESC']],
      });
      res
        .status(201)
        .send({ message: 'Product ordered by price...', orderdedByPrice });
    } catch (error) {
      res
        .status(500)
        .send({
          message: ' We had a problem ordering the product by price...',
        });
    }
  },
};

module.exports = ProductController;
