const { resolve } = require('path');

module.exports = {
    devtool: 'cheap-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 5000,
    },
    optimization: {
        minimize: false,
    },
};
