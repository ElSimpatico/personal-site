const { resolve } = require('path');

module.exports = {
    devtool: 'cheap-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    optimization: {
        minimize: false,
    },
    output: {
        publicPath: '/',
    },
};
