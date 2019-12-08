import * as files from '@/lib/files';

const name = 'filename';
const ext = 'ext';
const filename = `${name}.${ext}`;

describe('lib/files', () => {
  describe('toFileObject', () => {
    const { toFileObject } = files.default;
    it('should return expected object', () => {
      expect(toFileObject(filename))
        .toEqual({ name, ext, filename });
    });
  });

  describe('toMemo', () => {
    const memoised = { exists: true };
    const input = { filename };

    it('spread file into memoised', () => {
      expect(files.default.toMemo(memoised, input)).toEqual({
        ...memoised,
        'filename.ext': {
          ...files.default.toFileObject(filename),
          varname: filename,
        },
      });
    });
  });
});
