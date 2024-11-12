/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // throw new Error('Not implemented');
  return ((1.0/3.0) * Math.PI * r * r * h).toFixed(2);
};
