import * as memoiseObjectArray from '@/lib/helpers/memoiseObjectArray';

const expected = 'memoise';

memoiseObjectArray.default = jest.fn(() => expected);
memoiseObjectArray.expected = expected;

export default memoiseObjectArray;
