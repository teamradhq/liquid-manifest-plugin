import * as toMemo from '@/lib/files/toMemo';
import parse from '@/lib/files/parse';

describe('lib.files.parse', () => {
  it('should reduce array using lib.files.toMemo', () => {
    const input = [1, 2, 3];
    toMemo.default = jest.fn();
    parse(input);
    expect(toMemo.default).toBeCalledTimes(input.length);
  });
});
