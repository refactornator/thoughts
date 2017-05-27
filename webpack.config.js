const path = require('path');
const context = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/main/js/start.js', './src/main/scss/main.scss'],
  devtool: 'sourcemaps',
  cache: true,
  output: {
    filename: 'built/bundle.js',
    path: path.resolve(__dirname, 'src/main/resources/static')
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /.woff|.woff2|.svg|.eot|.ttf/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: '/fonts/[hash].[ext]'
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['es2015', 'react', 'stage-0'],
              plugins: [
                ['react-css-modules', { context }]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'built/bundle.css',
      allChunks: true,
    }),
  ],
};
