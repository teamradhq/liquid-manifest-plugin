/**
 * Generate a block to define a liquid template
 * variable, {varname}, that has {value},
 * @param  {String} varname
 * @param  {String} value
 * @return {String}
 */
const variable = (varname, value) => (
  `{% assign ${varname} = ${value} %}`
);

export default variable;
