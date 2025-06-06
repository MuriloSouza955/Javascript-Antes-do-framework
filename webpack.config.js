const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "9-Bundlers", "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: require("path").resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HTMLwebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules/",
      },
    ],
  },
};
