import memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';

const testKey = 'a';
const transform = jest.fn(() => 'transformed');
const input = [];
for (let i = 0; i < 2; i += 1) {
  input.push({ [testKey]: `item-${i}` });
}

describe('lib.helpers.memoiseObjectArray', () => {
  it('should memoise array of objects by key', () => {
    expect(memoiseObjectArray(input, testKey))
      .toEqual({
        [input[0][testKey]]: input[0],
        [input[1][testKey]]: input[1],
      });
  });

  it('should call transform function to elements', () => {
    memoiseObjectArray(input, testKey, transform);
    expect(transform).toBeCalledTimes(input.length);
  });

  it('should apply transform function to elements', () => {
    const output = memoiseObjectArray(input, testKey, transform);
    expect(output[input[0][testKey]]).toBe(transform());
  })
});
