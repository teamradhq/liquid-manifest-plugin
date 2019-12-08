import toMemo from '@/lib/files/toMemo';

import {
  name,
  ext,
  filename,
} from '#/mocks/lib/files/files.data.mock';

console.log({
  name,
  ext,
  filename,
});

describe('lib.files.toMemo', () => {
  const memoised = { exists: true };
  const input = filename;
  it('spread file into memoised', () => {
    expect(toMemo(memoised, input)).toEqual({
      ...memoised,
      'filename.ext': {
        ...toFileObject(filename),
        varname: filename,
      },
    });
  });
});
