const web = require("@neutrinojs/web");

module.exports = {
  options: {
    mains: {
      index: {
        entry: "index",
        template: "./src/index.html",
      },
    },
  },
  use: [
    web({
      devServer: {
        compress: true,
        port: 9000,
      },
    }),
  ],
};
