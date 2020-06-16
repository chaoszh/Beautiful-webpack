const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        teacher: './app/object/teacher.js',
        student: './app/object/student.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './app/index.html',
            chunks: 'all'
        }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: '6300',
        inline: true,
        compress: true,
        hot: true,
        open: true,
    }
}