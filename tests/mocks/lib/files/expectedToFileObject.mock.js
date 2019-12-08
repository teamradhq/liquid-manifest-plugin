import toFileObjectMock from '%/lib/files/toFileObject.mock';

/**
 * Form our expected result object for lib.files.toFileObject.
 * @param  {String} varname
 * @return {Object}
 */
const expectedToFileObject = (varname) => {

return ({
  ...toFileObjectMock.default(),
  varname,
});
}

export default expectedToFileObject;
