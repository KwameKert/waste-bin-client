const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1/**",
    createProxyMiddleware({
      target: "http://165.227.192.124:8080",
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};
