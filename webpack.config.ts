import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
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
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".scss"],
  },
};

export default config;
