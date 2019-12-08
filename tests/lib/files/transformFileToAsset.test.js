import transformFileToAsset from '@/lib/files/transformFileToAsset';
import toFileObjectMock from '#/mocks/lib/files/toFileObject.mock';

import { filename } from '#/mocks/lib/files/files.data.mock';

describe('lib.files.transformFileToAsset', () => {
  it('should call lib.files.toFileObject', () => {
    transformFileToAsset(filename);
    expect(toFileObjectMock.default)
      .toBeCalledTimes(1);
  });
});
