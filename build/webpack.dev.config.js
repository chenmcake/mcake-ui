/**
 * 本地测试
 */

// 引入路径变量
var path = require('path');
// 引入webpack
var webpack = require('webpack');
// 引入合并webpack配置插件
var merge = require('webpack-merge');
// 引入公共配置
var webpackBaseConfig = require('./webpack.base.config.js');
// 生产html文件插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 提示错误信息插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// 输出配置
module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './test/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../test/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        // 用于HTML引入文件版本号
        new HtmlWebpackPlugin({
            inject: true,
            // 输出文件
            filename: path.join(__dirname, '../test/dist/index.html'),
            // 模板文件
            template: path.join(__dirname, '../test/index.html')
        }),
        // 错误提示
        new FriendlyErrorsPlugin()
    ]
});
