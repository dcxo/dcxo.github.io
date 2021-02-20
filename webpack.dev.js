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

const config = merge(commonConfig, devConfig);
console.dir(config);
module.exports = config