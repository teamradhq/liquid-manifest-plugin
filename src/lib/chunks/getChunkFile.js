/**
 * Find chunk file ending with {ext}.
 * @param  {Object} chunk
 * @param  {String} ext
 * @return {String|null}
 */
const getChunkFile = (chunk, ext) => (
  chunk.files.find((str) => str.endsWith(ext))
);

export default getChunkFile;
