const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { dirname, join } = require('path');

module.exports = {
    entry: './src/main.js',
    resolve: {
        alias: {
            svelte: dirname(require.resolve('svelte/package.json'))
        },
        extensions: ['.mjs', '.js', '.svelte', '.yml', '.yaml'],
        mainFields: ['svelte', 'browser', 'module', 'main'],
        modules: ['node_modules', join(__dirname, 'src')]
    },
    output: {
        path: join(__dirname, 'public'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: 'webpack-extended-import-glob-loader'
            }, {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            }, {
                test: /\.yma?l$/,
                type: 'json',
                use: 'yaml-loader'
            }, {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        preprocess: require('svelte-preprocess')({
                            scss: {
                                prependData: `@import 'src/global.scss';`
                            }
                        })
                    }
                }
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }, {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new HtmlWebpackPlugin({
            title: `David's Portfolio`,
            hash: true,
            favicon: 'favicon.png',
            template: 'src/index.html'
        }),
        // !prod && new webpack.HotModuleReplacementPlugin()
    ],
};
