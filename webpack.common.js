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
        use: 'svg-sprite-loader'
        
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
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