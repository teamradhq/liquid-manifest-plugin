const fileRegExp = new RegExp(/(.*)\.([A-Za-z0-9]{1,})$/);

/**
 * Cast filename {str} to an object we can use.
 *
 * @param  {String} file
 *
 * @return {Object}
 */
const toFileObject = (str) => {
  const match = str ? str.match(fileRegExp) : [];

  const [
    filename,
    name,
    ext,
  ] = match;

  return { filename, name, ext };
};

export default toFileObject;
