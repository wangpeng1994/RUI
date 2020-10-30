const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'production',
  // 打包基于react的UI库时，不需要打包react框架
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
