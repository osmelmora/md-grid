const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = function (env) {
  let outputFilename;
  let plugins = [];
  const baseFilename = 'material-grid';

  if (env.production) {
    outputFilename = baseFilename + '.min.js';
    plugins.push(new UglifyJsPlugin({ minimize: true }));
  } else {
    outputFilename = baseFilename + '.js';
  }

  return {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'md-grid.js',
      library: 'MDGrid',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDom',
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ],
    },
    plugins: [
      new UglifyJsPlugin({ minimize: true }),
    ],
  }
};
