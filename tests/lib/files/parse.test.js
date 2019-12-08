import * as transformFileToAsset from '@/lib/files/transformFileToAsset';
import * as memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';
import parse from '@/lib/files/parse';

describe('lib.files.parse', () => {
  const expected = 'memoise';
  const input = [1, 2, 3];

  memoiseObjectArray.default = jest.fn(() => expected);
  transformFileToAsset.default = jest.fn();

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
    expect(parse(input)).toBe(expected);
  });
});
