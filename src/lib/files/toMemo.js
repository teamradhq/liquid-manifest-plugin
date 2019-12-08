import transformFileToAsset from './transformFileToAsset';

/**
 * Add a {file} to a {memoised} object.
 *
 * @param  {Object} memoised
 * @param  {String} data.file
 * @param  {String} data.varname
 *
 * @return {Object}
 */
const toMemo = (memoised, { filename, varname }) => ({
  ...memoised,
  [filename]: transformFileToAsset({
    filename,
    varname,
  }),
});

export default toMemo;
