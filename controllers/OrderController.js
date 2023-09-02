const {
  Order,
  User,
  Product,
  Section,
  Order_Product,
} = require('../models/index');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
      req.body.products.forEach(async product => {
        const productPrice = await Product.findOne({
          where: { id: product.id },
        });
        await Order_Product.create({
          productId: product.id,
          orderId: order.id,
          quantity: product.count,
          price: productPrice.price,
        });
      });

      res.status(201).send({ message: 'order added...', order });
    } catch (error) {
      console.log(error);
      error.origin = 'Order';
      next(error);
    }
  },

  async checkout(req, res) {
    try {
      const lineItems = await Promise.all(
        req.body.products.map(async (product) => {
          const item = await Product.findOne({
            where: { id: product.id },
          });
      
          return {
            price_data: {
              currency: "eur",
              product_data: {
                name: item.product,
              },
              unit_amount: item.price * 100,
            },
            quantity: product.count,
          };
        })
      );

      // create a stripe session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email: req.body.email,
        mode: 'payment',
        success_url: 'http://localhost:3000/checkout/success',
        cancel_url: 'http://localhost:3000',
        line_items: lineItems,
      });

      // Redirect url
      res.json({url: session.url});

      // create the item
      
      // const newOrder = {
      //   userId: req.user.id,
      //   date: new Date(),
      //   order_num: Math.random() * 100000,
      //   updatedAt: new Date(),
      //   createdAt: new Date(),
      // };

      // const order = await Order.create(newOrder);
      // req.body.products.forEach(async product => {
      //   const productPrice = await Product.findOne({
      //     where: { id: product.id },
      //   });
      //   await Order_Product.create({
      //     productId: product.id,
      //     orderId: order.id,
      //     quantity: product.count,
      //     price: productPrice.price,
      //   });
      // });
      
      //return session id
      return { id: session.id };
    } catch (error) {
      res
        .status(500)
        .send({ mensaje: 'There was a problem creating the charge.' , error});
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
          userId: req.user.id,
        },
        include: [
          {
            model: Order_Product,
            attributes: ['id', 'quantity', 'price'],
            include: [
              {
                model: Product,
                attributes: ['id', 'product'],
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
