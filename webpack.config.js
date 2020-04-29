
// we need an entry and an output

const path = require('path')



module.exports = {
    // tells webpack where we should start
    entry: ["@babel/polyfill",'./src/webpack-app.js'],
    mode:'development',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'

    },
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback:true,
        contentBase: path.join(__dirname,'public')
    }
};

