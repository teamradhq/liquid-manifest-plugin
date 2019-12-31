import assetBlock from '@/lib/template/assetBlock';

import liquid from '%/lib/liquid';

const mocks = [
  ['comment', 1],
  ['variable', 2],
];

const test = {
  name: 'name',
  file: 'file',
  variable: 'variable',
};

const expected = `${test.name}assetPath${test.variable}`;

describe('lib.template.assetBlock', () => {
  it('render an asset to liquid variable assignment', () => {
    expect(assetBlock(test)).toBe(expected);
  });

  it('should call lib.liquid.comment with args', () => {
    assetBlock(test);
    expect(liquid.default.comment).toBeCalledWith(test.name);
  });
  it('should call lib.liquid.variable with args', (value) => {
    assetBlock(test);
    expect(liquid.default.variable).toBeCalledWith('assetPath');
  });

  it.each(mocks)('should call lib.liquid.%s %s times', (fn, n) => {
    assetBlock(test);
    expect(liquid.default[fn]).toBeCalledTimes(n);
  });
});
