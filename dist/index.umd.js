if (process.env.NODE_ENV === 'production') {
    module.exports = require('./babel-plugin-auto-css-modules.umd.production.js');
} else {
    module.exports = require('./babel-plugin-auto-css-modules.umd.development.js');
}
