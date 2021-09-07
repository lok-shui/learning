const devHosts = {
  questionHost: "http://x4c-adl-question.x4c.dev.dm-ai.cn"
  // questionHost: "http://192.168.21.241"
};

const activeHosts = devHosts;

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/v1/api/question": {
        target: activeHosts.questionHost,
        secure: false,
        changeOrigin: true,
        ws: true
      }
    }
  }
};
