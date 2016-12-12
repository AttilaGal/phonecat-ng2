var ngtools = require('@ngtools/webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//TODO get css to work
module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
    }
  },
  entry: './app/main.ts',
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  plugins: [
    // new ngtools.AotPlugin({
    //   tsConfigPath: './tsconfig.json'
    // }),
    new CopyWebpackPlugin([
      {
        context: __dirname + '/app/img',
        from: '**/*',
        to: __dirname + '/dist/img/'
      },
      {
        context: __dirname + '/app/phones',
        from: '**/*',
        to: __dirname + '/dist/phones/'
      },
      {
        from: __dirname + '/app/index.html',
        to: __dirname + '/dist/'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};