import memoiseChunks from '@/lib/chunks/memoiseChunks';

import memoiseObjectArray from '%/lib/helpers/memoiseObjectArray.mock';

describe('lib.chunks.memoiseChunks', () => {
  it('should call lib.helpers.memoiseToObjectArray', () => {
    memoiseChunks();
    expect(memoiseObjectArray.default).toBeCalled();
  });
});
