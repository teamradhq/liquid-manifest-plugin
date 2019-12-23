import variableName from '@/lib/liquid/variableName';
import findChunkFile from '@/lib/files/findChunkFile';

/**
 * Parse valid liquid variable and add chunk file.
 * @param  {Object} chunks
 * @return {Array}
 */
const processAsset = (chunks) => (arr, [, current]) => [
  ...arr,
  {
    ...current,
    variable: variableName(current.varname || current.file),
    file: findChunkFile(chunks, current.name, current.ext),
  },
];

export default processAsset;
