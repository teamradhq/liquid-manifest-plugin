import liquid from '@/lib/liquid';

const toLiquidVars = (assets, chunks) => Object.entries(assets).reduce((arr, [, current]) => [
  ...arr,
  {
    ...current,
    variable: liquid.variableName(current.varname || current.file),
    file: chunks[current.name].files.find((str) => str.endsWith(current.ext)),
  },
], []);

export default toLiquidVars;
