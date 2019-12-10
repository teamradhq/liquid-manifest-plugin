import variableName from '@/lib/liquid/variableName';

/**
 * Parse valid liquid variable and add chunk file.
 * @param  {Object} chunks
 * @return {Array}
 */
const processAsset = chunks => (arr, [, current ]) => [
  ...arr,
  {
    ...current,
    variable: variableName(current.varname || current.file),
    file: chunks[current.name].files.find(
      (str) => str.endsWith(current.ext)
    ),
  },
];

export default processAsset;
