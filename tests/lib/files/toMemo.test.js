import toMemo from '@/lib/files/toMemo';

import toFileObjectMock from '%/lib/files/toFileObject.mock';
import expectedToFileObject from '%/lib/files/expectedToFileObject.mock';

import {
  filename,
} from '#/mocks/lib/files/files.data.mock';

describe('lib.files.toMemo', () => {
  const varname = 'varname';
  const memoised = { exists: true };

  it('should call lib.files.toFileObject with filename', () => {
    toMemo(memoised, { filename });
    expect(toFileObjectMock.default).toBeCalledWith(filename);
  });

  it('should spread file into memoised', () => {
    expect(toMemo(memoised, { filename })).toEqual({
      ...memoised,
      [filename]: expectedToFileObject(filename),
    });
  });

  it('should assign varname to file object', () => {
    expect(toMemo(memoised, { filename, varname })).toEqual({
      ...memoised,
      [filename]: expectedToFileObject(varname),
    });
  });
});
