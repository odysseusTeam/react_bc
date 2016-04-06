var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {

    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/app.jsx')
    ],

    resolve: {
        extensions: ["", ".js", ".jsx"]

    },

    devServer:{
        contentBase: 'src/www',
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 3000
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'app.js',

    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, "src"))
    ],
    module: {

        preLoaders: [
            {

                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                include: [path.resolve(__dirname, "src/app")],
                exclude: [nodeModulesPath]
            },
        ],
        loaders: [
            {

                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel'],
                exclude: [nodeModulesPath]
            },
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},

        ]
    },

    eslint: {
        configFile: '.eslintrc'
    },
};
module.exports = config;
