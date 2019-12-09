import renderAsset from './renderAsset';
import TEMPLATE_MESSAGE from './message';

const render = (assets) => TEMPLATE_MESSAGE + assets
  .reduce((str, asset) => str + renderAsset(asset), '');

export default render;
