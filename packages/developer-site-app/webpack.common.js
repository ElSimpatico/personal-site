const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
            alias: {
                '@components': join(srcDir, 'components'),
                '@context': join(srcDir, 'context'),
                '@core': join(srcDir, 'core'),
                '@pages': join(srcDir, 'pages'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: join(srcDir, 'index.html'),
            }),
            new Dotenv({
                path: `./.env${mode === 'development' ? '.dev' : ''}`,
            }),
        ],
        target: 'web',
    };
};
