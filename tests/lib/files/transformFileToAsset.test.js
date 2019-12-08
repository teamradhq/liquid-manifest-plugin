import transformFileToAsset from '@/lib/files/transformFileToAsset';
import toFileObjectMock from '#/mocks/lib/files/toFileObject.mock';

import expectedToFileObject from '#/mocks/lib/files/expectedToFileObject.mock';

import {
  filename,
  varname,
} from '#/mocks/lib/files/files.data.mock';

describe('lib.files.transformFileToAsset', () => {
  it('should call lib.files.toFileObject', () => {
    transformFileToAsset(filename);
    expect(toFileObjectMock.default)
      .toBeCalledTimes(1);
  });

  it('should return expected asset object', () => {
    expect(transformFileToAsset({ filename }))
      .toEqual(expectedToFileObject(filename));
  });

  it('should assign varname if passed', () => {
    expect(transformFileToAsset({ filename, varname }))
      .toEqual(expectedToFileObject(varname));
  });
});
