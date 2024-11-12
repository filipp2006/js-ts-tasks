/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  // throw new Error('Not implemented');
  v = Math.trunc( n / k );
  w = Math.floor(v);
  r = n % k;
  return w + ' ' + r;
};