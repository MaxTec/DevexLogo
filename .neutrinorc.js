const web = require("@neutrinojs/web");

module.exports = {
  use: [
    web({
      devServer: {
        compress: true,
        port: 9000,
      },
    }),
  ],
};
