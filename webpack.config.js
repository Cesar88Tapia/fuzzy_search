const path = require('path');

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
