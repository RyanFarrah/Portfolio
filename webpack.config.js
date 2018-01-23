const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/script/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: '/dist/',
    hot: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/script/components'),
      Pages: path.resolve(__dirname, 'src/script/pages'),
      Projects: path.resolve(__dirname, 'src/script/projects'),
      Utilities: path.resolve(__dirname, 'src/script/utils/'),
      Images: path.resolve(__dirname, 'src/img'),
      Style: path.resolve(__dirname, 'src/style')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
