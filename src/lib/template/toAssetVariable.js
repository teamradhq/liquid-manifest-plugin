import variableName from '@/lib/liquid/variableName';

const toAssetVariable = (assets, chunks) => Object.entries(assets)
  .reduce((arr, [, current]) => [
    ...arr,
    {
      ...current,
      variable: variableName(current.varname || current.file),
      file: chunks[current.name].files.find(
        (str) => str.endsWith(current.ext)
      ),
    },
  ], []);

export default toAssetVariable;
