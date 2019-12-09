import render from '@/lib/template/render';

import renderAsset from '%/lib/template/renderAsset.mock';

jest.mock('@/lib/template/template-message', () => 'message');

const test = [1, 2, 3];

describe('lib.template.render', () => {
  it('should apply lib.template.renderAsset to each asset', () => {
    render(test);
    expect(renderAsset.default)
      .toBeCalledTimes(test.length);
  });

  it('should concatenate template message and rendered assets', () => {
    expect(render([test[0]]))
      .toBe(`message${renderAsset.expected}`);
  });
});
