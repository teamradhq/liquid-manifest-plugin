import toFileObject from '@/lib/files/toFileObject';

import {
  name,
  ext,
  filename,
} from '#/mocks/lib/files/files.data.mock';

describe('lib.files.toFileObject', () => {
  it('should return expected object', () => {
    expect(toFileObject('foo.br'))
      .toEqual({ name, ext, filename });
  });
});
