import variableName from '@/lib/liquid/variableName';
import findChunkFile from './findChunkFile';

const fileRegExp = new RegExp(/(.*)\.([A-Za-z0-9]{1,})$/);

/**
 * Cast filename {str} to an object we can use.
 *
 * @param  {String} file
 *
 * @return {Object}
 */
const toFileObject = (chunks) => (obj) => {
  const match = (obj && obj.filename)
    ? obj.filename.match(fileRegExp)
    : [];

  const [
    filename,
    name,
    ext,
  ] = match;

  return {
    ext,
    filename,
    name,
    variable: variableName(filename),
    asset: findChunkFile(chunks, name, ext),
  };
};

export default toFileObject;
