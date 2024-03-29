const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.ts",
    notes: "./src/notes.ts",
    links: "./src/links.ts",
    about: "./src/about.ts",

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name]-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match .ts files
        exclude: /node_modules/,
        use: 'ts-loader', // Use ts-loader for TypeScript files
      },
      {
        test: /\.html$/, // Match .html files
        exclude: /node_modules/,
        use: 'html-loader', // Use html-loader for HTML files
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
  },
};