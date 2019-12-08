import toFileObject from './toFileObject';

const transformFileToAsset = ({ filename, varname }) => ({
  ...toFileObject(filename),
  varname: varname || filename,
});

export default transformFileToAsset;
