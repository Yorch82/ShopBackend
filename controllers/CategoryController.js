const { Category } = require('../models/index');

//Create a categorie
const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create({ ...req.body });
      res.status(201).send({ message: 'Category added...', category });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'We had an issue creating the category...',
      });
    }
  },
  //Show all categories
  async getAllCategory(req, res) {
    try {
      const allcategories = await Category.findAll();
      res.status(201).send({ mensaje: 'Search completed...', allcategories });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had a problem looking for all categories' });
    }
  },
  //Delete a category by ID
  async deleteCategory(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send({ message: 'Category has been deleted...' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: ' We had a problem deleting the category...' });
    }
  },
  //Update a category by ID
  async updateCategory(req, res) {
    try {
      await Category.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(201).send({ message: 'Category updated...' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: ' We had a problem updating the category...' });
    }
  },
  //Show a category by ID
  async getCategoryById(req, res) {
    try {
      const categoryById = await Category.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send({ message: 'Category found...', categoryById });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem searching the category...' });
    }
  },
};

module.exports = CategoryController;
