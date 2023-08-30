const {
  Order,
  User,
  Product,
  Section,
  Order_Product,
} = require('../models/index');

//Create order
const OrderController = {
  async create(req, res, next) {
    try {
      const newOrder = {
        userId: req.user.id,
        date: new Date(),
        order_num: Math.random() * 100000,
        updatedAt: new Date(),
        createdAt: new Date(),
      };

      const order = await Order.create(newOrder);
      req.body.productsId.forEach(async productId => {
        await Order_Product.create({ productId: productId, orderId: order.id });
      });

      res.status(201).send({ message: 'order added...', order });
    } catch (error) {
      console.log(error);
      error.origin = 'Order';
      next(error);
    }
  },

  //Shows the order and its user
  async getOrderUser(req, res) {
    try {
      const orderUsers = await Order.findAll({
        include: [User],
      });
      res.status(201).send({ mensaje: 'Show Orders with Users', orderUsers });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: ' We had a problem looking for Orders with Users ' });
    }
  },
  //Gets all orders
  async getAllOrder(req, res) {
    try {
      const allorders = await Order.findAll({
        where: {
          userId: req.user.id
        },
        include: [
          {
            model: Order_Product,
            attributes: ["id", "quantity", "price"],
            include: [
              {
                model: Product,
                attributes: ["id", "product"],
              },
            ],
          },
        ],
      });
      res.status(201).send({ mensaje: 'Show all Orders', allorders });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had a problem looking for all Orders' });
    }
  },
  async getOrderProduct(req, res) {
    try {
      const ordersProduct = await Order.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'sectionId', 'categoryId'],
        },
        include: [
          {
            model: Product,
            through: { attributes: [] },
            attributes: ['product', 'price'],
            include: [
              {
                model: Section,
                attributes: ['section'],
              },
            ],
          },
        ],
      });
      res.status(201).send({ message: 'Show relations', ordersProduct });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: ' We had a problem looking for relations' });
    }
  },
};

module.exports = OrderController;
