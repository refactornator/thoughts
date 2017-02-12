var path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/main/js/start.js'],
  devtool: 'sourcemaps',
  cache: true,
  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['es2015', 'react', 'stage-0'],
              plugins: 'transform-decorators-legacy'
            }
          }
        ]
      }
    ]
  }
};