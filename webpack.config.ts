import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/website.min.js"
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            }
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      }
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.pug",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/website.min.css",
    }),
  ],
};

export default config;
