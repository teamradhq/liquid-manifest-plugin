import * as assetBlock from '@/lib/template/assetBlock';

const expected = 'render';
assetBlock.default = jest.fn(() => expected);
assetBlock.expected = expected;

export default assetBlock;
