const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...otras configuraciones de webpack...
  plugins: [
    // ...otros complementos...
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // ...otras opciones...
    }),
  ],
};
