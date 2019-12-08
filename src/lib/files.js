const fileRegExp = new RegExp(/(.*)\.([A-Za-z0-9]{1,})$/);

/**
 * Cast filename {str} to an object we can use.
 *
 * @param  {String} file
 *
 * @return {Object}
 */
const toFileObject = (str) => {
  const [
    filename,
    name,
    ext,
  ] = str.match(fileRegExp) || [];

  return { filename, name, ext };
};

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

/**
 * Parse {files} from options to memoised
 * object of file objects.
 *
 * @param  {Array:Object} files
 *
 * @return {Object}
 */
const parse = (files) => files.reduce(toMemo, {});

export default {
  toFileObject,
  toMemo,
  parse,
};
