import findChunkFile from '@/lib/files/findChunkFile';

const chunkName = 'test-chunk';

const chunks = {
  [chunkName]: {
    files: [
      'file.css',
      'file.js',
      'file.liquid',
    ],
  },
};

const tests = [
  ['nothing', null],
  ...chunks['test-chunk'].files.map((el) => (
    [el.split('.')[1], el]
  )),
];

describe('lib.chunks.findChunkFile', () => {
  it.each(tests)('%s should return %s', (ext, expected) => {
    expect(findChunkFile(chunks, chunkName, ext))
      .toBe(expected);
  });

  it('should return null if no chunk with name', () => {
    expect(findChunkFile(chunks, 'chunkName', 'js'))
      .toBe(null);
  });
});
