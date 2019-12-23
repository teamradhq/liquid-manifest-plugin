import memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';
import toFileObject from './toFileObject';

/**
 * Parse {files} from options to memoised
 * object of file objects.
 *
 * @param  {Array:Object} files
 *
 * @return {Object}
 */
const parse = (files, chunks) => {
  const transform = toFileObject(chunks);

  return memoiseObjectArray(files, 'filename', transform);
};

export default parse;
