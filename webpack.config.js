const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distFolderPath = resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: distFolderPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  watch: true,
  devServer: {
    contentBase: distFolderPath,
    port: 5000,
  },
  plugins: [new HtmlWebpackPlugin()],
};
