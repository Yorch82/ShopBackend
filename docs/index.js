const basicInfo = require('./basicInfo');
const components = require('./components');
const users = require('./users');
const products = require('./products');
const orders = require('./orders');
const categories = require('./categories');
const reviews = require('./reviews');
const sections = require('./sections');

module.exports = {
    ...basicInfo,
    paths: {
        ...users,
        ...products,
        ...sections,
        ...orders,
        ...categories,
        ...reviews,

    },
    ...components,
};