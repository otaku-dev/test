import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.ts?$/,
      include: [
        path.resolve(__dirname, "src"),
      ],
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ],
      loader: "ts-loader",
    }],
  },
  resolve: {
    extensions: [".ts"],
  },
};

export default config;
