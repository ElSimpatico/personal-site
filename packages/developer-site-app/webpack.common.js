const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = resolve(__dirname, './src');

module.exports = (_env, options) => {
    const { mode = 'development' } = options;
    return {
        mode,
        entry: join(srcDir, 'index.tsx'),
        output: {
            clean: true,
            path: resolve(__dirname, './dist'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                },
                            },
                        },
                    },
                },
                {
                    test: /.(c|sa|sc)ss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: join(srcDir, 'index.html'),
            }),
        ],
        target: 'web',
    };
};
