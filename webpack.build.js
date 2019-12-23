const path = require('path');

const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

const babelrc = require('./.babelrc');

module.exports = () => {
  const mode = 'development';

  const src = path.resolve(__dirname, 'src');
  const dist = path.resolve(__dirname, 'build');

  const entry = {
    'liquid-manifest-plugin': `${src}/LiquidManifestPlugin/index.js`,
  };

  const output = {
    chunkFilename: '[name].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: dist,
  };

  const resolve = {
    extensions: ['.js', '.css'],
    alias: { '@': src },
  };

  return {
    mode,
    target: 'node',
    entry,
    output,
    resolve,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader', options: babelrc },
          ],
        },
      ],
    },
    plugins: [new UnusedFilesWebpackPlugin({
      patterns: ['src/**/*.js'],
    })],
  };
};
