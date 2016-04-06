const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader'}
    ]
  }
}
