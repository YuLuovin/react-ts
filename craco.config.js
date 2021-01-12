const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, {
      env, paths
    }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
          // ...{
          //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
          //   chunkFilename: 'static/js/[name].js'
          // },
          path: path.resolve(__dirname, 'docs'), // 修改输出文件目录
          publicPath: '/react-ts'
      }
      return webpackConfig
    },
    alias: {
      '@': resolve('src'),
      'component': resolve('src/component')
    }
  }
};