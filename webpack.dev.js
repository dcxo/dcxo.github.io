const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    optimization: {
        minimize: false,
    },
    devtool: 'source-map',
    devServer: {
        hot: true
    },
    mode: 'development'
};

module.exports = merge(commonConfig, devConfig);