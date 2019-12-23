import liquid from '@/lib/liquid';

/** Generate a text block to assign a liquid asset variable */
const assetBlock = ({ name, file, variable }) => {
  let block = '';

  block += liquid.comment(name);
  block += liquid.variable('assetPath', `'${file}' | asset_url | split: '?'`);
  block += liquid.variable(variable, 'assetPath[0]');

  return block;
};

export default assetBlock;
