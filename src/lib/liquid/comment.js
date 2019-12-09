/** @type {String} Comment start block. */
const start = '{% comment %}';

/** @type {String} Comment end block. */
const end = `${start.replace('{% ', '{% end')}\n`;

const block = (str, isBlock) => (
  isBlock ? `\n${str}\n` : str
);

/**
 * Add a liquid comment containing {message}.
 * @param  {String}  message
 * @param  {Boolean} isBlock
 * @return {String}
 */
const comment = (str, isBlock = false) => (
  `${start}${block(str, isBlock)}${end}`
);

export default comment;
