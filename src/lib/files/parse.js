import toMemo from './toMemo';

/**
 * Parse {files} from options to memoised
 * object of file objects.
 *
 * @param  {Array:Object} files
 *
 * @return {Object}
 */
const parse = (files) => files.reduce(toMemo, {});

export default parse;
