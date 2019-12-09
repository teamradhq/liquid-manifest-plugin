import renderAsset from '@/lib/template/renderAsset';

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

const expected = test.name + 'assetPath' + test.variable;

describe('lib.template.renderAsset', () => {
  it.each(mocks)('should call lib.liquid.%s %s times', (fn, n) => {
    renderAsset(test);
    expect(liquid.default[fn]).toBeCalledTimes(n);
  });

  it('render an asset to liquid variable assignment', () => {
    expect(renderAsset(test)).toBe(expected);
  });
});
