if (process.env.NODE_ENV === 'production') {
    module.exports = require('./babel-plugin-auto-css-modules.cjs.production.js');
} else {
    module.exports = require('./babel-plugin-auto-css-modules.cjs.development.js');
}
