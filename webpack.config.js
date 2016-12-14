var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app/main.ts',
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  plugins: [
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
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
};