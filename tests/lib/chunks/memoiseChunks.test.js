import memoiseChunks from '@/lib/chunks/memoiseChunks';

import memoiseObjectArray from '%/lib/helpers/memoiseObjectArray.mock';

const chunks = [
  { name: 'a'},
  { name: 'b'},
]

const key = 'name';

describe('lib.chunks.memoiseChunks', () => {
  it('should call lib.helpers.memoiseToObjectArray', () => {
    memoiseChunks(chunks, key);
    expect(memoiseObjectArray.default)
      .toBeCalledWith(chunks, key);
  });
});
