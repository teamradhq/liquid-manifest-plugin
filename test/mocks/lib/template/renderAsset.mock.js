import * as renderAsset from '@/lib/template/renderAsset';

const expected = 'render';
renderAsset.default = jest.fn(() => expected);
renderAsset.expected = expected;

export default renderAsset;
