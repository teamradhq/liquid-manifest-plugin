import variableName from '@/lib/liquid/variableName';

describe('lib.liquid.variableName', () => {
  it('should be properly formatted', () => {
    expect(variableName('file.js'))
      .toBe('fileJs');
  });
});
