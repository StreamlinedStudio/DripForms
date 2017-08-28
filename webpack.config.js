const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/dripForms.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dripForms.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: 'src/'
  }
}
