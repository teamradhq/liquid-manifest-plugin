const path = require('path');

const babelrc = require('./.babelrc');

const LiquidManifestPlugin = require('./build/liquid-manifest-plugin').default;
// : MiniCssExtractPlugin.loader,

/**
 * devMode
 *   development  => Run a watcher that restarts webpack on change
 *   example      => Run our example webpack config
 */

module.exports = () => {
  const mode = 'development';

  const devMode = mode === 'development';

  const src = path.resolve(__dirname, 'example');
  const dist = path.resolve(__dirname, 'dist');
  const test = path.resolve(__dirname, 'test');

  /** @type {Object} An example config file with default settings. */
  const liquidOptions = {
    output: dist,
    filename: 'manifest.liquid',
    files: [
      { filename: 'index.js' },
      { filename: 'style.js', varname: 'awesomeVariable' },
    ],
  };

  const entry = {
    index: `${src}/index.js`,
    style: `${src}/style.css`,
  };

  const output = {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
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
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
