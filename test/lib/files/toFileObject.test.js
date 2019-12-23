import toFileObject from '@/lib/files/toFileObject';

import variableName from '%/lib/liquid/variableName.mock';
import findChunkFile from '%/lib/files/findChunkFile.mock';

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
    toFileObject()(filename)
    expect(variableName.default).toBeCalledTimes(1);
  });

  it('should call lib.files.findChunkFile once', () => {
    toFileObject()(filename)
    expect(findChunkFile.default).toBeCalledTimes(1);
  });

  it('should call lib.files.findChunkFile with arguments', () => {
    toFileObject()(filename)
    expect(findChunkFile.default).toBeCalledWith(undefined, name, ext);
  });

  it('should return an object of matches', () => {
    expect(toFileObject()(filename)).toEqual(expected);
  });

  it('should  return an object of undefined', () => {
    expect(toFileObject()()).toEqual({
      ext: undefined,
      filename: undefined,
      name: undefined,
      variable: undefined,
    });
  });
});
