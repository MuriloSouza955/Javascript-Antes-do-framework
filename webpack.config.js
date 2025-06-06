const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "9-Bundlers", "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: require("path").resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
        directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
    open: true,  
  },
  plugins: [new HTMLwebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.js$/i,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
