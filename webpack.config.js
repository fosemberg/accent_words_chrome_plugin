var path = require('path');
var webpack = require("webpack");
var fs = require("fs");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: fs.readFileSync('./tamperMonkeyHeader.js', 'utf8'),
            raw: true,
        }),
    ]
};