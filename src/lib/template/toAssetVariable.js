import processAsset from './processAsset';

const toAssetVariable = (assets, chunks) => Object.entries(assets)
  .reduce(processAsset(chunks), []);

export default toAssetVariable;
