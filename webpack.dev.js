const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, common, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  // 解决局部地区原地刷新后导致 react-router 无法接管
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RUI - React',
      template: 'example.html'
    })
  ],
})