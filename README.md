# Liquid Manifest Plugin

Use this plugin to create liquid variables that reference webpack's asset manifest.

## Usage

```javascript
const LiquidManifestPlugin = require('liquid-manifest-plugin');

module.exports = () => {
  entry: {
    index: `${src}/index.js`,
    style: `${src}/style.css`,
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
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
    })
  ],
};
```

### Options

`filename`
File name of generated liquid template.
Default is `manifest.liquid`.

`output`
Output folder for liquid template.
Default is `/dist/`.

`publicPath`
Public path to distribution files. Defaults to `/`.

`files`
Array of objects that describe output files.

```javascript
{
  filename: String,
  variable: String,
}
```

`filename` The name of the asset to define in liquid template.
`variable` Specify a variable name for this asset. Defaults to camel-case version of file, so `some-file.js` becomes `someFileJs`.
