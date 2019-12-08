import getChunkFile from '@/lib/chunks/getChunkFile';

const chunk = {
  files: [
    'file.css',
    'file.js',
    'file.liquid',
  ],
};

const tests = [
  ['nothing', undefined],
  ...chunk.files.map((el) => (
    [el.split('.')[1], el]
  )),
];

describe('lib.chunks.getChunkFile', () => {
  it.each(tests)('%s should return %s', (ext, expected) => {
    expect(getChunkFile(chunk, ext))
      .toBe(expected);
  });
});
