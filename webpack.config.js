const path = require('path');
var fs = require("fs");

var webpack = require("webpack");
var webpackMerge = require("webpack-merge");

const PATHS = {
  dashboards: path.join(__dirname, 'dashboards'),
  build: path.join(__dirname, 'build'),
  jobs: path.join(__dirname, 'jobs'),
  utils: path.join(__dirname, 'utils'),
  widgets: path.join(__dirname, 'widgets'),
  styles: path.join(__dirname, 'styles')
};

// grab all dashboards
var dashboardPaths = fs.readdirSync(PATHS.dashboards).reduce(function(map, filename) {
  map[path.basename(filename, '.jsx')] = path.join(PATHS.dashboards, filename);
  return map;
}, {});

var webConfig = {
  entry: dashboardPaths,
  target: 'web',
  output: { path: PATHS.build, filename: '[name].dashboard.bundle.js'},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {cacheDirectory: true}
        },
        include: [PATHS.dashboards, PATHS.widgets],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [PATHS.styles, PATHS.widgets]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('common.bundle.js'), // TODO: need to reconfigure this
    new webpack.EnvironmentPlugin({"NODE_ENV": 'development'})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  }
};

// TODO: probably remove this
// var packConfigs = [webConfig,  webpackMerge(webConfig, {
//     target: 'node',
//     entry: ['babel-polyfill', './app.js'],
//     output: {
//       filename: '[name].server.bundle.js'
//     }
//   })]
// console.log(packConfigs[1].module)
// module.exports = packConfigs
module.exports = webConfig