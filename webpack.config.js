const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'kanban_board.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['ts-loader'],
        exclude: /node_modules|\.d\.ts$/
      },
      {
        test: /\.d\.ts$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      }  
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin({template: "./public/index.html"})]
}
