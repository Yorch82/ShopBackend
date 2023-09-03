const basicInfo = require('./basicInfo');
const components = require('./components');
const users = require('./users');
// const users = require('./products');
// const users = require('./orders');
// const users = require('./categories');
// const users = require('./reviews');
// const users = require('./sections');

module.exports = {
    ...basicInfo,
    paths: {
        ...users,
        // ...products,
        // ...orders,
        // ...categories,
        // ...reviews,
        // ...sections
    },
    ...components,
};