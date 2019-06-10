const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'RUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        use: 'svg-sprite-loader' // 该 loader 可以将所有 svg 放入到页面中等待使用
        
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'index.html'
  //   })
  // ],
  // 打包基于react的UI库时，不需要打包react框架
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React'
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',  
  //     root: 'ReactDOM'
  //   }
  // }
}