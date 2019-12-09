import toFileObject from '@/lib/files/toFileObject';

import {
  name,
  ext,
  filename,
} from '#/mocks/lib/files/files.data.mock';

describe('lib.files.toFileObject', () => {
  it('should return an object of matches', () => {
    expect(toFileObject(filename))
      .toEqual({ name, ext, filename });
  });

  it('should  return an object of undefined', () => {
    expect(toFileObject())
      .toEqual({
        name: undefined,
        ext: undefined,
        filename: undefined,
       });
  })
});
