var path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  context: path.join(__dirname, './src'),
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      }
    ]
  }
};
