const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   },
   
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist'
},
 plugins: [htmlPlugin],
 resolve: {
     fallback: {
         fs: false,
         os: false,
         path: false,
         child_process: false
     }
 }
};