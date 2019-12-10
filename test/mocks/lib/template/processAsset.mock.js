import * as processAsset from '@/lib/template/processAsset';

const expected = { processed: 'asset' };
processAsset.default = jest.fn(() => expected);
processAsset.expected = expected;

export default processAsset;
