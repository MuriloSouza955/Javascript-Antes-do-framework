const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '9-Bundlers', 'src', 'js', 'index.js'),
    output: {
        filename: 'main.js',
        path: require('path').resolve(__dirname, 'dist')
    },
    mode: 'development',
};