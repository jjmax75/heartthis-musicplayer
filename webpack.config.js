const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css"
});

module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'js/app.js'
  },
  resolve: {
      extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: extractSass.extract({
        use: [ { loader: 'css-loader' }, { loader: 'sass-loader' } ],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    contentBase: path.resolve( 'build' ),
    compress: true,
    port: 8080
  },
  devtool: "cheap-eval-source-map"
}
