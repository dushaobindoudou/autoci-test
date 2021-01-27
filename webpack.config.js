const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');

const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';
const release = process.env.RELEASE;

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: isProd ? `lp-axios-${pkg.version}.min.js` : 'lp-axios.js',
    library: 'axios',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __LP_MONITOR_VERSION: JSON.stringify(pkg.version),
      __LP_MONITOR_BUILED_ENV: isProd ? "''" : `'${nodeEnv}'`,
      __LP_MONITOR_RELEASE_ENV:
        release === 'production' ? "''" : `'${release}'`,
    }),
  ],
  resolve: {
    alias: {},
  },
  performance: {
    hints: 'warning', // 有性能问题提醒
  },
  target: ['web'],
};

if (!isProd && !release) {
  config.devServer = {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: false,
    // injectClient: false,
    port: 9009,
    allowedHosts: ['.tongdao.cn'],
  };

  config.plugins.push(
    new HtmlWebpackPlugin({
      title: '测试axios扩展',
      filename: path.resolve(__dirname, 'build/index.html'),
      template: path.resolve(__dirname, 'examples/index.html'),
      inject: 'head',
    })
  );
}

module.exports = config;
