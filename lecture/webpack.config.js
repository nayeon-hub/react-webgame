const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : prduction
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], //확장자 알아서 확인해준다.
  },
  entry: {
    app: ["./client"], // 이미 파일이 불러오는 파일은 불러올 필요없다
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력 __diranme(현재경로)
};
