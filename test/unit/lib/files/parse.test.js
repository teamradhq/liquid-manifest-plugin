import parse from '@/lib/files/parse';

import toFileObject from '%/lib/files/toFileObject.mock';
import memoiseObjectArray from '%/lib/helpers/memoiseObjectArray.mock';

describe('lib.files.parse', () => {
  const input = [1, 2, 3];

  it('should call lib.helpers.memoiseObjectArray', () => {
    parse(input);
    expect(memoiseObjectArray.default)
      .toBeCalledTimes(1);
  });

  it('should memoise with lib.files.toFileObject', () => {
    parse(input);
    expect(toFileObject.default)
      .toBeCalledTimes(1);
  });

  it('should memoise with supplied chunks object', () => {
    parse(input, 'chunks');
    expect(toFileObject.default)
      .toBeCalledWith('chunks');
  });

  it('return memoised value', () => {
    expect(parse(input)).toBe(memoiseObjectArray.expected);
  });
});
