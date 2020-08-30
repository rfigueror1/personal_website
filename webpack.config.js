const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  context: __dirname,
  node: {
    __filename: true
  },
  watch: true,
  module: {
  rules: [
    {
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    },
    {
      test: /\.(png|jpg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        }
      },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
        ]
    },
  ]
},
devServer: {
  watchOptions: {
    ignored: /node_modules/
  }
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
