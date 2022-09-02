/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  const arr = s.split(" ");
  const trunc = arr.slice(0, k);
  const output = trunc.join(" ");

  return output;
};
