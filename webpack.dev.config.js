const path = require('path')
const HtmlPluginPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        "index":'./src/index.js',
    },
    output: {
        path: __dirname,
        filename: './release/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [
        new HtmlPluginPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, './release'),
        open: true,
        port: 9000
    }
}