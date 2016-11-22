var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    APP_DIR + '/index.js'
  ],
  devtool: 'source-map',
  module: {
    preloaders: [{
      test: /\.scss/,
      loader: 'import-glob-loader'
    }],
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap!sass?sourceMap']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=raw-assets/[name].[ext]"
      },

    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/assets/'
  },
  sassLoader: {
    includePaths: ['app/styles']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('public/main.css')
  ]
};

module.exports = config;
/*
* {
 test: /\.(jpe?g|png|gif|svg)$/i,
 loaders: [
 'file?hash=sha512&digest=hex&name=[hash].[ext]',
 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
 ]
 },
* */