import toFileObject from '@/lib/files/toFileObject';

import variableName from '%/lib/liquid/variableName.mock';

import {
  name,
  ext,
  filename,
} from '#/mocks/lib/files/files.data.mock';

const expected = {
  name,
  ext,
  filename,
  variable: filename,
}

describe('lib.files.toFileObject', () => {
  it('should call lib.liquid.variableName', () => {
    toFileObject(filename)
    expect(variableName.default).toBeCalledTimes(1);
  });

  it('should return an object of matches', () => {
    expect(toFileObject(filename)).toEqual(expected);
  });

  it('should  return an object of undefined', () => {
    expect(toFileObject()).toEqual({
      ext: undefined,
      filename: undefined,
      name: undefined,
      variable: undefined,
    });
  });
});
