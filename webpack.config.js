import path from "node:path";

export default {
  mode: "production",
  entry: "./src/index.js",
  experiments: {
    html: true, // Enables native HTML support as first-class modules
    css: true, // Enables native CSS parsing and bundling
  },
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
