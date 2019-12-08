import toFileObject from './toFileObject';

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
  [filename]: {
    ...toFileObject(filename),
    varname: varname || filename,
  },
});

export default toMemo;
