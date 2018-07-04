module.exports = {
  lintOnSave: false,
  configureWebpack: {
    mode: 'development',
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader : 'raw-loader',
        }
      ]
    }
  },
};
