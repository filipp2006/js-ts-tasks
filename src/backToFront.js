/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount >= str.length) {
    return str;
  }
  const front = str.slice(0, symbolsCount);
  const back = str.slice(-symbolsCount);
  const result = front + back;
  while(result.length < str.length){
     result += back;
  }
  return result;
};
