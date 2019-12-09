const path = require('path');
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
/* eslint-enable no-unused-vars */
const babelrc = require('./.babelrc');

const LiquidManifestPlugin = require('./src/LiquidManifestPlugin');

// : MiniCssExtractPlugin.loader,

/**
 * devMode
 *   development  => Run a watcher that restarts webpack on change
 *   example      => Run our example webpack config
   *   build        => Bundle our resource (add hook to do this on new tag)
 */

module.exports = (env) => {
  const { MODE: mode = 'development' } = {
    ...process.env,
    ...env,
  };

  const devMode = mode === 'development';

  const src = path.resolve(__dirname, 'example');
  const dist = path.resolve(__dirname, 'dist');
  const test = path.resolve(__dirname, 'test');

  /** @type {Object} An example config file with default settings. */
  const liquidOptions = {
    output: dist,
    filename: 'manifest.liquid',
    files: [
      { file: 'index.js' },
      { file: 'style.js' },
    ],
  };

  const entry = {
    index: `${src}/index.js`,
    style: `${src}/style.css`,
  };

  const output = {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: dist,
    publicPath: '/',
  };

  const resolve = {
    extensions: ['.js', '.css'],
    alias: {
      '@': src,
      '#': test,
      '%': `${test}/mocks`,
    },
  };

  const plugins = devMode
    ? [new LiquidManifestPlugin(liquidOptions)]
    : [];

  return {
    mode,
    entry,
    output,
    resolve,
    plugins,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelrc,
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
      ],
    },
  };
};
