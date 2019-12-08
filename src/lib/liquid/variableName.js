/** @type {RegExp} To drop or capitalize in varnames. */
const filenameRegExp = /\.([a-zA-Z])/g;

/**
 * Parse {str} to default variable name pattern.
 * @param  {String} str
 * @return {String}
 */
const variableName = (str) => str.replace(
  filenameRegExp,
  (m, grp) => grp.toUpperCase(),
);

export default variableName;
