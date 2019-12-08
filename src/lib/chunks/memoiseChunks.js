import memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';

/**
 * Memoise chunks by chunk name.
 * @param  {Array} chunks
 * @return {Object}
 */
const memoiseChunks = (chunks) => (
  memoiseObjectArray(chunks, 'name')
);

export default memoiseChunks;
