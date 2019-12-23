const path = require('path');

const LiquidManifestPlugin = require('./build/liquid-manifest-plugin').default;

module.exports = () => {
  const src = path.resolve(__dirname, 'example');
  const dist = path.resolve(__dirname, 'dist');

  return {
    mode: 'development',
    entry: {
      index: `${src}/index.js`,
      style: `${src}/style.css`,
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: dist,
      publicPath: '/',
    },
    plugins: [
      new LiquidManifestPlugin({
        output: dist,
        filename: 'manifest.liquid',
        files: [
          { filename: 'index.js' },
          { filename: 'style.js', varname: 'awesomeVariable' },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
