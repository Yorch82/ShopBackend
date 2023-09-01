const Logger = require('logplease');
const options = {
  useColors: true, // Enable colors
  color: Logger.Colors.Yellow, // Set the color of the logger
  showTimestamp: true, // Display timestamp in the log message
  useLocalTime: false, // Display timestamp in local timezone
  showLevel: true, // Display log level in the log message
  filename: null, // Set file path to log to a file
  appendFile: true, // Append logfile instead of overwriting
};
const logger = Logger.create('Message', options);
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const { typeError } = require('./middlewares/errors');

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

app.listen(port, () => {
  logger.info('Server is running on ' + port);
});
