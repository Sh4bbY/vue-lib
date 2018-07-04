module.exports = {
  lintOnSave      : false,
  configureWebpack: {
    mode     : 'production',
    devtool  : 'source-map',
    resolve  : {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
    },
    externals: {
      'lodash/shuffle': {
        commonjs : 'lodash/shuffle',
        commonjs2: 'lodash/shuffle',
        amd      : 'lodash/shuffle',
      },
    },
  },
};
