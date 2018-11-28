const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets:["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
          test: /\.json/,
          use: {
            loader: path.resolve('my-loader.js')
        }
      }
    ]
  },
  devServer: {
        inline:true,
        port: 10000
      },
  plugins: [
    new ExtractTextPlugin('cssbundle.css')
       ]
};