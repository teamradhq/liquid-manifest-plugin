import render from '@/lib/template/render';

import assetBlock from '%/lib/template/assetBlock.mock';

jest.mock('@/lib/template/message', () => 'message');

const test = [1, 2, 3];

describe('lib.template.render', () => {
  it('should apply lib.template.assetBlock to each asset', () => {
    render(test);
    expect(assetBlock.default)
      .toBeCalledTimes(test.length);
  });

  it('should concatenate template message and rendered assets', () => {
    expect(render([test[0]]))
      .toBe(`message${assetBlock.expected}`);
  });
});
