import toMemo from '@/lib/files/toMemo';
import * as toFileObject from '@/lib/files/toFileObject';

import {
  name,
  ext,
  filename,
} from '#/mocks/lib/files/files.data.mock';

describe('lib.files.toMemo', () => {
  const memoised = { exists: true };
  const input = filename;

  toFileObject.default = jest.fn(() => ({}));

  it('spread file into memoised', () => {
    expect(toMemo(memoised, { filename })).toEqual({
      ...memoised,
      [filename]: { varname: filename },
    });
  });
});
