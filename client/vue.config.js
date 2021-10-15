const path = require("path");
const { routes } = require('./src/routes.js');

module.exports = {
  // outputDir sets the path where the production files will be created. In this case, we are setting it to ../server/public. They will be stored in a folder called public.
  outputDir: path.resolve(__dirname, "../server/public"),
  // I dont remember what this does
  configureWebpack: {
    devtool: 'source-map'
  },
  // Creates sitemap for SEO purposes
  pluginOptions: {
    sitemap: {
      baseURL: 'https://example.com',
      routes,
    }
  },
  // These are the proxy settings for the dev server. It is currently set to the default IP address given by docker. You can also set it to localhost:8080 or wherever. In production, it should automatically use the correct IP address.
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
      },
    },
  },
  // Load SCSS Variables to entire project
  css: {
    loaderOptions: {
      sass: {
        prependData:
          `@import "@/scss/_variables.scss";`
      }
    }
  }
};