var path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  devServer: {
    port: 8888,
    stats: 'errors only'
  },
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
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      }
    ]
  }
};
