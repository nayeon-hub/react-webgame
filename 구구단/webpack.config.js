const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: "./client",
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], // browserlist
                },
                debug: true,
              },
            ],
            ["@babel/preset-react"],
          ],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
