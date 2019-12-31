import assetBlock from '@/lib/template/assetBlock';

import liquid from '%/lib/liquid';

const test = {
  name: 'name',
  asset: 'file',
  variable: 'variable',
};

const mocks = [
  ['comment', 1],
  ['variable', 2],
];

const variables = [
  ['asset_url', ['assetPath', `'${test.asset}' | asset_url | split: '?'`], 1],
  ['assetPath[0]', [test.variable, 'assetPath[0]'], 2],
];

const expected = `${test.name}assetPath${test.variable}`;

describe('lib.template.assetBlock', () => {
  it('render an asset to liquid variable assignment', () => {
    expect(assetBlock(test)).toBe(expected);
  });

  it('should call lib.liquid.comment with args', () => {
    assetBlock(test);
    expect(liquid.default.comment).toBeCalledWith(test.name);
  });

  it.each(mocks)('should call lib.liquid.%s %s times', (fn, n) => {
    assetBlock(test);
    expect(liquid.default[fn]).toBeCalledTimes(n);
  });

  it.each(variables)('should define liquid variable for %s', (varname, args, n) => {
    assetBlock(test);
    expect(liquid.default.variable).nthCalledWith(n, ...args);
  });
});
