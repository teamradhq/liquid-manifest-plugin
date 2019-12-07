import variable from '@/lib/liquid/variable';

describe('lib.liquid.variable', () => {
  it('should return assignment string', () => {
    expect(variable('name', 'value'))
      .toBe('{% assign name = value %}');
  });
});
