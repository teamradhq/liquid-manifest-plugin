/**
 * Create an accumulator function that adds a {key} to
 * {accumulator} object with {el} or supplied
 * {transform} function applied to {el}.
 *
 * @param  {String} key
 * @param  {Function} transform
 * @return {Function}
 */
const memoiseObject = (key, transform) => (accumulator, el) => ({
  ...accumulator,
  [el[key]]: (transform ? transform(el) : el),
});

/**
 * Memoise an {array} of objects by {key} value.
 * Optionally apply a function to {transform}
 * each {array} item.
 *
 * @param  {Array} array
 * @param  {String} key
 * @param  {Function} transform
 * @return {Object}
 */
const memoiseObjectArray = (array, key, transform = null) => (
  array.reduce(memoiseObject(key, transform), {})
);

export default memoiseObjectArray;
