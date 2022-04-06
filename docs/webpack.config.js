const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/ts/index.tsx',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.[chunkhash].js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    new MiniCssExtractPlugin({ filename:'main.[chunkhash].css' }),
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, 'src')],
      exclude: [/node_modules/]
    }, {
      test: /.(less|css)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }, {
        loader: "less-loader",
        options: {
          sourceMap: true
        },
      }]
    }, {
      test: /.(fft|svg|woff|eot|ttf|png)$/,
      use: [{
        loader: "url-loader"
      }]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 9000
  }
}