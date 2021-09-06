const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const rulesForCss = {
    test: /\.css$/,
    use: ['style-loader','css-loader']
}

const rulesForReact = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};
const rules = [rulesForReact, rulesForCss];
module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true
      }
    }    
  }
};
