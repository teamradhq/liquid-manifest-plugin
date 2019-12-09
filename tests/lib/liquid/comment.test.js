import comment from '@/lib/liquid/comment';

const COMMENT = {
  start: '{% comment %}',
  end: '{% endcomment %}\n',
};

describe('lib.liquid.comment', () => {
  describe.each(['start', 'end'])('%s', (test) => {
    const block = COMMENT[test];

    it(`should ${test} with ${block}`, () => {
      expect(comment('foo')[`${test}sWith`](block))
        .toBe(true);
    });
  });

  it('should be inline comment', () => {
    expect(comment('hello'))
      .toBe(`${COMMENT.start}hello${COMMENT.end}`);
  });

  it('should be block comment', () => {
    expect(comment('hello', true))
      .toBe(`${COMMENT.start}\nhello\n${COMMENT.end}`);
  });
});
