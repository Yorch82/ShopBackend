const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const { typeError } = require('./middlewares/errors');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());
app.use(cors());
app.use(express.static('./public'));
app.use(typeError);

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/categories', require('./routes/categories'));
app.use('/reviews', require('./routes/reviews'));
app.use('/sections', require('./routes/sections'));
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

app.listen(port, () => {
  console.log('Server is running on ' + port);
});
