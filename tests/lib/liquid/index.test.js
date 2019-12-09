import liquid from '@/lib/liquid';

describe('lib/liquid', () => {
  describe.each(Object.keys(liquid))('%s', (test) => {
    it('should always return a string', () => {
      expect(typeof liquid[test]('anything')).toBe('string');
    });

    const isNewLine = test !== 'variableName';
    it(`should ${isNewLine ? 'always' : 'not'} end with new line`, () => {
      expect(liquid[test]('anything').endsWith('\n'))
        .toBe(isNewLine);
    })
  });
});
