import toMemo from '@/lib/files/toMemo';
import * as toFileObject from '@/lib/files/toFileObject';

import {
  filename,
} from '#/mocks/lib/files/files.data.mock';

const varname = 'varname';

describe('lib.files.toMemo', () => {
  const memoised = { exists: true };

  toFileObject.default = jest.fn(() => ({}));

  it('should call lib.files.toFileObject with filename', () => {
    toMemo(memoised, { filename });
    expect(toFileObject.default).toBeCalledWith(filename);
  });

  it('should spread file into memoised', () => {
    expect(toMemo(memoised, { filename })).toEqual({
      ...memoised,
      [filename]: { varname: filename },
    });
  });

  it('should assign varname to file object', () => {
    expect(toMemo(memoised, { filename, varname })).toEqual({
      ...memoised,
      [filename]: { varname },
    });
  });
});
