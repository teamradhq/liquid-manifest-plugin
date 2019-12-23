import memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';
import transformFileToAsset from './transformFileToAsset';

/**
 * Parse {files} from options to memoised
 * object of file objects.
 *
 * @param  {Array:Object} files
 *
 * @return {Object}
 */
const parse = (files) => memoiseObjectArray(files, 'filename', transformFileToAsset);

export default parse;
