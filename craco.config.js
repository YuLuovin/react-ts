const CracoLessPlugin = require('craco-less');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
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
    }
  ],
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      paths.appBuild = 'docs'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/react-ts/'
      }
      return webpackConfig
    },
    alias: {
      '@': resolve('src'),
      'component': resolve('src/component')
    },
    plugins: [
      // 查看打包进度
      new SimpleProgressWebpackPlugin()
    ]
  }
};