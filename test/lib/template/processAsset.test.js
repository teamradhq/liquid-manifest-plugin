import processAsset from '@/lib/template/processAsset';

import variableName from '%/lib/liquid/variableName.mock';

const chunks = {
  'file-1': {
    files: ['file-1.js', 'file-1.css'],
  },
};

const entry = (ext = 'js') => [
  'file-1',
  {
    varname: 'varname',
    file: 'filename',
    filename: `file-1.${ext}`,
    name: `file-1`,
    ext,
  }
];

describe('lib.template.processAsset', () => {
  it('should process asset and push to array', () => {
    const test = entry('js');
    const result = processAsset(chunks)([], test);
    expect(result).toEqual([{
      ext: 'js',
      varname: 'varname',
      file: 'file-1.js',
      filename: 'file-1.js',
      name: 'file-1',
      variable: 'varname',
    }]);
  });

  it('should apply lib.liquid.variableName to each file', () => {
    processAsset(chunks)([], entry('js'));
    expect(variableName.default)
      .toBeCalledTimes(1);
  });

  it('should assign varname if supplied with file', () => {
    const test = entry();
    const result = processAsset(chunks)([], test)[0];
    expect(result.variable).toBe(test[1].varname)
  });

  it('should assign file if no varname supplied', () => {
    const test = entry();
    delete test[1].varname;
    const result = processAsset(chunks)([], test)[0];
    expect(result.variable).toBe(test[1].file)
  });

  it.each(['js', 'css'])('should get chunk file with %s extension', (ext) => {
    const test = entry(ext);
    const result = processAsset(chunks)([], test)[0];
    expect(result.file).toBe(`file-1.${ext}`);
  });
});
