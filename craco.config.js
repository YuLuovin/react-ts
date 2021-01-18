const CracoLessPlugin = require('craco-less');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const path = require('path');
const publicPath = process.env.NODE_ENV === 'development' ? '/' : '/react-ts/';

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
        publicPath: publicPath
      }
      return webpackConfig
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
    plugins: [
      // 查看打包进度
      new SimpleProgressWebpackPlugin()
    ]
  }
};