const file = (n) => ({
  name: `file-${n}`,
  files: [
    `file-${n}.css`,
    `file-${n}.js`,
  ],
});

const chunks = [
  file(1),
  file(2),
  file(3),
];

chunks.expected = [
  {
    name: chunks[0].name,
    js: chunks[0].files[0],
    css: chunks[0].files[1],
  },
];

export default chunks;
