module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 960,
      selectorBlackList: [],
      minPixelValue: 0
    }
  }
};
