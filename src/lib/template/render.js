import assetBlock from './assetBlock';
import TEMPLATE_MESSAGE from './message';

const render = (assets) => TEMPLATE_MESSAGE + Object.values(assets)
  .reduce((str, asset) => str + assetBlock(asset), '');

export default render;
