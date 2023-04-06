const webpack          = require('webpack');
const path             = require('path');

const config = {
    watch: true,
    entry: './public/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }
        ]
    },
};

module.exports = config;