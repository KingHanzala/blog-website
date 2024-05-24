// webpack.config.js

const webpack = require('webpack');

module.exports = {
  // Other webpack configurations...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL),
    }),
  ],
};
