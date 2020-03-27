const path = require("path");
const HTMLWEbpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWEbpackPlugin({
      template: "./src/index.html",
      minify: "auto"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    }),
    new ImageminPlugin({
      disable: isDev,
      pngquant: {
        quality: "50"
      }
    })
  ],
  devServer: {
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "/css")
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          "eslint-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
              publicPath: "../img"
            }
          }
        ]
      }
    ]
  }
};
