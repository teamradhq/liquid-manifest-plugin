/**
 * Find chunk file ending with {ext}.
 * @param  {Object} chunk
 * @param  {String} ext
 * @return {String|null}
 */
const findChunkFile = (chunks, name, ext) => {
  if (!chunks[name]) {
    return null;
  }

  return chunks[name].files.find((str) => str.endsWith(ext)) || null;
};

export default findChunkFile;
