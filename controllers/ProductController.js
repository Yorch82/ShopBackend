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
 
};

module.exports = ProductController;
