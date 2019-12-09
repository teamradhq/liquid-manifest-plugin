import * as comment from '@/lib/liquid/comment';

comment.default = jest.fn((str) => str);

export default comment;
