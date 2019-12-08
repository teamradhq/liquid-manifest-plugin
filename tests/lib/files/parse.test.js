import parse from '@/lib/files/parse';

import transformFileToAsset from '%/lib/files/transformFileToAsset.mock';
import memoiseObjectArray from '%/lib/helpers/memoiseObjectArray.mock';

describe('lib.files.parse', () => {
  const input = [1, 2, 3];
  const args = [
    input,
    'filename',
    transformFileToAsset.default,
  ];

  it('should call lib.helpers.memoiseObjectArray', () => {
    parse(input);
    expect(memoiseObjectArray.default)
      .toBeCalledTimes(1);
  });

  it('should memoise with transform function', () => {
    parse(input);
    expect(memoiseObjectArray.default)
      .toBeCalledWith(...args);
  });

  it('return memoised value', () => {
    expect(parse(input)).toBe(memoiseObjectArray.expected);
  });
});
