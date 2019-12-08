import liquid from '@/lib/liquid';

describe('lib/liquid', () => {
  describe.each(Object.keys(liquid))('%s', (test) => {
    it('should always return a string', () => {
      expect(typeof liquid[test]('anything')).toBe('string');
    });
  });
});
