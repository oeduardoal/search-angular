const webpack = require("webpack");
module.exports = {
  entry: "./assets/js/App.js",
  output: {
    filename: "dist/js/bundle.js",
  },
  plugins:[
    //  new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
   devServer: {
    inline:true,
    port: 1234,
    // contentBase: '.',
  }
}
