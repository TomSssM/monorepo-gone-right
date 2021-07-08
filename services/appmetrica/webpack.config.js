const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    app: path.join(__dirname, 'client/index.tsx'),
  },
  mode: 'development',
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist', 'static'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve('./node_modules'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json']
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
  ],
};
