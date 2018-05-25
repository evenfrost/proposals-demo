const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: resolve(__dirname, 'dist'),
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
};
