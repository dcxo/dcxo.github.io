const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { dirname, join } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: './src/main.js',
    resolve: {
        alias: {
            svelte: dirname(require.resolve('svelte/package.json'))
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.yma?l$/,
                type: 'json',
                use: 'yaml-loader'
            },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: !prod,
                        preprocess: require('svelte-preprocess')({
                            scss: {
                                prependData: `@import 'src/global.scss';`
                            }
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: `David's Portfolio`,
            hash: true,
            favicon: 'favicon.png',
            template: 'src/index.html'
        }),
    ],
    optimization: {
        minimize: prod,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    },
    devtool: prod ? false : 'source-map',
    devServer: {
        hot: true
    }
};
